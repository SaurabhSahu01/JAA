import adminmiddleware from "./adminmiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    if(req.method === "GET"){
        try {
            let messages = [];
            const querySnapshot = await db.collection('contactmessages').get();
            querySnapshot.forEach(doc => {
                messages.push(doc.data());
            });
            return res.status(200).json({
                status: 200,
                message: "messages fetched succesfully",
                data: messages
            });
        } catch(err) {
            return res.status(502).json({
                status: 502,
                message: "database error"
            });
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