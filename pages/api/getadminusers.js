import adminmiddleware from "./adminmiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    if(req.method === "GET"){
       try {
           const userCollection = db.collection('users');
           const userSnapshot = await userCollection.get();

           if (userSnapshot.empty) {
               return res.status(200).json({
                   message: "userlist is empty"
               });
           }

           const data = [];

           for (const userDoc of userSnapshot.docs) {
               const userId = userDoc.id;
               const userData = userDoc.data();
               const profileCollection = userDoc.ref.collection('profile');
               
               const profileSnapshot = await profileCollection.get();

               if (!profileSnapshot.empty) {
                   const profileDoc = profileSnapshot.docs[0];
                   const userProfileData = profileDoc.data();
                   data.push({ id: userId, verified: userData.verified, profile: userProfileData });
               }
           }

           return res.status(200).json({
               data: data
           });
       } catch (error) {
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

export default adminmiddleware(handler);
