// middleware to protect APIs from flooding
import { verifyToken } from "@/src/utils/firebaseadmin";
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
                if(!req.body || Object.keys(req.body).length === 0){
                    req.body = {
                        uid: decodedtoken.uid
                    }
                }
                else{
                    req.body.uid = decodedtoken.uid;
                }
                return handler(req, res);
            })
            .catch(e => {
                console.log(e);
                return res.status(403).json({
                    status: 403,
                    message: "Not the valid token"
                })
            })
    }
}
export default apimiddleware;