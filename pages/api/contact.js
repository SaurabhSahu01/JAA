import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    const { firstName, lastName, email, number, message } = req.body;
    const name = firstName + " " + lastName;
    const docID = firstName + lastName + new Date().getTime();
    if(req.method === "POST"){
        const date = new Date().toDateString();
        db.collection('contactmessages').doc(docID).set({
            name: name,
            number: number,
            email: email,
            message: message,
            date: date
        }).then(response => {
            return res.status(200).json({
                status: 200,
                message: "message sent successfully"
            })
        }).catch(err => {
            return res.status(502).json({
                status: 502,
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

export default apimiddleware(handler)