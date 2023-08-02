import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    if(req.method === "POST"){
        const { uid } = req.body;
        const profileBody = {};
        for(const keys in req.body){
            if(keys !== "uid"){
                profileBody[keys] = req.body[keys];
            }
        }
       db.collection('users').doc(uid).collection('profile').doc('profile').set(profileBody, {merge: true})
            .then(response => {
                res.status(200).json({
                    message: "profile updated successfully"
                })
            })
            .catch(err => {
                res.status(504).json({
                    message: err
                })
            })
    }
    else{
        res.status(405).json({
            status: 405,
            message: "only POST allowed"
        })
    }
}

export default apimiddleware(handler);