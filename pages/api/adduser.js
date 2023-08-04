import apimiddleware from "./apimiddleware";
import { addUser } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "POST") {
        const uid = req.body.uid;
        const creationTime = req.body.creationTime;
        const signInType = req.body.signInType;
        const result = addUser(uid, creationTime, signInType);
        result
            .then(data => {
                return res.status(200).json({
                    status: 200,
                    message: "user added successfully"
                })
            })
            .catch(e => {
                return res.status(502).json({
                    status: 502,
                    message: "database error"
                })
            })
    }
    else {
        res.status(405).json({
            status: 405,
            message: "only POST allowed"
        })
    }
}

export default apimiddleware(handler);
