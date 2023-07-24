import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    const { uid } = req.body;
    //console.log(decodedToken.uid);
    if(req.method === "GET"){
        const profileRef = db.collection('users').doc(uid).collection('profile').doc('profile');
        profileRef.get().then(docSnapshot => {
            if(docSnapshot.exists){
                const data = docSnapshot.data();
                res.status(200).json({
                    set: data.set
                })
            }
        })
    }
    else{
        res.status(405).json({
            status: 405,
            message: "only GET allowed"
        })
    }
}

export default apimiddleware(handler)