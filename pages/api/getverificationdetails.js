import adminmiddleware from "./adminmiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "GET") {
        const userid = req.query.uid;
        const verficationDoc = db.collection('verification').doc(userid).get();
        const verificationData = (await verficationDoc).data();
        res.status(200).json({
            data: verificationData
        })
    }
    else {
        res.status(405).json({
            status: 405,
            message: "only GET allowed"
        })
    }
}

export default adminmiddleware(handler);