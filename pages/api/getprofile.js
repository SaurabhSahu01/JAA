import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "GET") {
        const { uid } = req.body;
        try {
            const documentRef = db.collection('users').doc(uid).collection('profile').doc('profile');
            const docSnapshot = await documentRef.get();
            const data = docSnapshot.data();
            return res.status(200).json({
                data: data
            });
        }
        catch (error) {
            return res.status(404).json({
                message: "some database error"
            });
        }
    }
    else {
        res.status(405).json({
            status: 405,
            message: "only GET allowed"
        })
    }
}

export default apimiddleware(handler);