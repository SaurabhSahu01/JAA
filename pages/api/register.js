import apimiddleware from "./apimiddleware";
import formidable from "formidable"
import { register } from "@/src/utils/firebaseadmin";

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
                if(fields && files.photo){
                    const { firstName, lastName, number, gender, dob, school, program, hostel, joiningYear, graduationYear } = fields;
                    const { photo } = files;
                    // console.log(image2.originalFilename, image2.filepath, image2.mimetype)
                    register(uid, firstName, lastName, number, gender, dob, school, program, hostel, joiningYear, graduationYear, photo).then(response => {
                        console.log("image added", response);
                        res.status(200).json({
                            status: 200,
                            message: 'profile updated successfully'
                        });
                    }).catch(err => {
                        console.log("error uploading the image : ", err);
                        res.status(504).json({
                            status: 504,
                            message: "error registring the user"
                        })
                    })
                }
                else{
                    const { firstName, lastName, number, gender, dob, school, program, hostel, joiningYear, graduationYear } = fields;
                    //console.log(firstName);
                    register(uid, firstName, lastName, number, gender, dob, school, program, hostel, joiningYear, graduationYear, null).then(response => {
                        console.log("image added", response);
                        res.status(200).json({
                            status: 200,
                            message: 'profile updated successfully'
                        });
                    }).catch(err => {
                        console.log("error uploading the image : ", err);
                        res.status(504).json({
                            status: 504,
                            message: "error registring the user"
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