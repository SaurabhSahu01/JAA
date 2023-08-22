import adminmiddleware from "./adminmiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "GET") {
        const usersSnapshot = await db.collection('users').get();
        const users = usersSnapshot.size;

        const postsSnapshot = await db.collection('posts').get();
        const posts = postsSnapshot.size;

        const messagesSnapshot = await db.collection('contactmessages').get();
        const messages = messagesSnapshot.size;

        const verificationSnapshot = await db.collection('verification').get();
        const verifications = verificationSnapshot.size;

        res.status(200).json({
            users: users,
            posts: posts,
            messages: messages,
            verifications: verifications
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