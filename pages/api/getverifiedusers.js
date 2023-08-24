import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const userRef = db.collection('users').get();
            const userDocs = (await userRef).docs;
            const data = [];
            for(const docs of userDocs){
                if(docs.data().verified === true){
                    const profileRef = db.collection('users').doc(docs.id).collection('profile').doc('profile');
                    const profileData = await profileRef.get();
                    const finalProfileData = profileData.data();
                    data.push({id: docs.id, data: finalProfileData})
                }
            }
            return res.status(200).json({
                data: data
            })
        }
        catch (error) {
            console.error('Error:', error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }
    else {
        return res.status(405).json({
            status: 405,
            message: "Only GET method allowed"
        });
    }
}

export default apimiddleware(handler)

