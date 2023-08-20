import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "GET") {
        //console.log(req.query.q);
        const useruid = req.query.q;
        const required = req.query.required;
        try {
            const documentRef = db.collection('users').doc(useruid).collection('profile').doc('profile');
            documentRef.get().then(docSnapshot => {
                const data = docSnapshot.data();
                //console.log(data);
                if(required === "all"){
                    res.status(200).json({
                        data: data
                    })
                }
                else if(required === "name"){
                   const name = data.firstName + " " + data.lastName; 
                    res.status(200).json({
                        name: name,
                        photo: data.photo
                    })
                }
            })
        }
        catch (error) {
            res.status(404).json({
                message: "some database error"
            })
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