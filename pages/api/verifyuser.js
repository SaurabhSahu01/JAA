import adminmiddleware from "./adminmiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    if(req.method === "GET"){
        const uid = req.query.uid;
        try{
            db.collection('users').doc(uid).set({
                verified: true
            }, {merge: true}).then(response => {
                res.status(200).json({
                    message: `${uid} user verified`
                })
            })
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
            message: "only GET allowed"
        })
    }
}

export default adminmiddleware(handler)