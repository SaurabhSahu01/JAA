import adminmiddleware from "./adminmiddleware";
import { db } from "@/src/utils/firebaseadmin";
async function handler(req, res){
    if(req.method === "GET"){
        const eventId = req.query.id;
        try {
            await db.collection('events').doc(eventId).delete();
            return res.status(200).json({
                message: `${eventId} event deleted successfully`
            });
        } catch (err) {
            return res.status(504).json({
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