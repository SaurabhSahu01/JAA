import adminmiddleware from "./adminmiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    if(req.method === "POST"){
        const event = req.body.event;
        const date = req.body.date;
        db.collection('events').doc().set({
            event: event,
            date: date
        }).then(response => {
            res.status(200).json({
                message: "event successfully added"
            })
        }).catch(err => {
            res.status(504).json({
                message: "database error"
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

export default adminmiddleware(handler);