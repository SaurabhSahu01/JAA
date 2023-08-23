import adminmiddleware from "./adminmiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    if(req.method === "POST"){
        const uid = req.query.uid;
        const { action } = req.body;
        try{
            if(action === "verify") {
                db.collection('users').doc(uid).set({
                    verified: true
                }, {merge: true}).then(response => {
                    res.status(200).json({
                        message: `${uid} user verified`
                    })
                })
            }
            else if(action === "not verify"){
                db.collection('users').doc(uid).set({
                    verified: false
                }, {merge: true}).then(response => {
                    res.status(200).json({
                        message: `${uid} user is not verified`
                    })
                })
            }
        }
        catch(err){
            res.status(504).json({
                message: "some database error"
            })
        }
    }
    else{
        res.status(405).json({
            status: 405,
            message: "only POST allowed"
        })
    }
}

export default adminmiddleware(handler)