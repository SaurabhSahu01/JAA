import adminmiddleware from "./adminmiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "GET") {
        console.log("hello")
        const eventRef = db.collection('events').get();
        const eventDocs = (await eventRef).docs;
        const data = [];
        for(const doc of eventDocs){
            data.push({id: doc.id, data: doc.data()});
        }
        res.status(200).json({
            data: data
        })
    }
    else {
        res.status(403).json({
            status: 403,
            message: "only GET allowed"
        })
    }
}
export default adminmiddleware(handler)
