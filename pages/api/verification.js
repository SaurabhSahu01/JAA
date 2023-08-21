import apimiddleware from "./apimiddleware";
import formidable from "formidable"
import { verificationMethod } from "@/src/utils/firebaseadmin";
import { db } from "@/src/utils/firebaseadmin";

export const config = {
    api: {
        bodyParser: false,
    },
}

async function handler(req, res){
    if(req.method === "POST"){
        const form = formidable({ multiples: false });
        const { uid } = req.body;

        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Error parsing form data:', err);
                res.status(500).json({
                    status: 500,
                    error: 'Failed to parse form data'
                });
                return;
            }
            else {
                if(files.image1 && files.image2){
                    const { image1, image2 } = files;
                    
                    verificationMethod(uid, image1, image2).then(response => {
                        // console.log('verificatin done');
                        db.collection('users').doc(uid).set({
                            verified: 'pending'
                        }, {merge: true}).then(response => {
                            res.status(200).json({
                                message: 'verification status updated'
                            });
                        }).catch(err => {
                            res.status(504).json({
                                message: "verification status cannot be updated"
                            })
                        })
                    }).catch(err => {
                        console.log("error uploading the image : ", err);
                        res.status(504).json({
                            message: 'verification cannot be done'
                        })
                    })

                }
            }
        });
    }
    else{
        res.status(405).json({
            status: 405,
            message: "only POST allowed"
        })
    }
}

export default apimiddleware(handler);