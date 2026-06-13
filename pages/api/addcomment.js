import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "POST") {
        // postid, userid, comment
        const { comment, uid, datetime } = req.body;
        const docid = uid + new Date().getTime().toString().slice(-7);
        const postid = req.query.pid;
        
        try {
            await db.collection('posts').doc(postid).collection('comments').doc(docid).set({
                date: datetime,
                comment: comment,
                userid: uid
            });
            return res.status(200).json({
                message: `comment added for ${postid} by ${uid}`
            });
        } catch (err) {
            return res.status(404).json({
                message: "some database error"
            });
        }
    }
    else {
        res.status(405).json({
            status: 405,
            message: "only POST allowed"
        })
    }
}

export default apimiddleware(handler);