// middleware to protect APIs from flooding
import { verifyToken } from "@/src/utils/firebaseadmin";
import axios from "axios";
import { webAPIKey } from "@/firebase.config";
import { serialize } from "cookie";

const apimiddleware = handler => async (req, res) => {
    const tokenString = req.headers['authorization'] ? req.headers['authorization'].split(" ") : null;
    if (!tokenString) {
        return res.status(403).json({
            status: 403,
            message: "No Header Provided"
        });
    }
    else if (!tokenString[1]) {
        return res.status(403).json({
            status: 403,
            message: "No Token String"
        });
    }
    else {
        let result = verifyToken(tokenString[1]);
        return result
            .then(decodedtoken => {
                // console.log(decodedtoken)
                console.log(req.body)
                if (!req.body || Object.keys(req.body).length === 0) {
                    req.body = {
                        uid: decodedtoken.uid
                    }
                }
                else {
                    req.body.uid = decodedtoken.uid;
                }
                return handler(req, res);
            })
            .catch(e => {
                // console.log("error = ",e.errorInfo.code);
                if (e.errorInfo.code === "auth/id-token-expired" || tokenString[2]) {
                    // get a new id token from the refresh token
                    // get the tokenString[2]
                    if (tokenString[2]) {
                        const url = 'https://securetoken.googleapis.com/v1/token';
                        const apiKey = webAPIKey;

                        const requestData = `grant_type=refresh_token&refresh_token=${tokenString[2]}`;
                        const headers = {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        };

                        axios.post(`${url}?key=${apiKey}`, requestData, { headers })
                            .then(response => {
                                console.log('Response:', response.data);
                                // access_token refresh_token
                                res.setHeader('Set-Cookie', serialize('userToken', response.data.access_token, {
                                    path: '/',
                                    maxAge: 3600,
                                }));
                                res.setHeader('Set-Cookie', serialize('refreshToken', response.data.refresh_token, {
                                    path: '/',
                                    maxAge: 14000,
                                }));
                                return res.status(200).json({
                                    message: "refresh token revoked"
                                })
                            })
                            .catch(error => {
                                console.error('Error:', error.message);
                                return res.status(403).json({
                                    message: "not the valid refresh token"
                                })
                            });
                    }
                }
            else{
                return res.status(403).json({
                    status: 403,
                    message: "Not the valid token"
                })
            }
            })
    }
}
export default apimiddleware;