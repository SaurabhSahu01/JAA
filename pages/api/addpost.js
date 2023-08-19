import apimiddleware from "./apimiddleware";
import formidable from "formidable"
import { addpost } from "@/src/utils/firebaseadmin";
import { db } from "@/src/utils/firebaseadmin";

export const config = {
    api: {
        bodyParser: false,
    },
}

async function handler(req, res) {
    if (req.method === "POST") {
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
                if (fields && files.photo) {
                    const { content, date } = fields;
                    const { photo } = files;
                    const postid = uid.slice(0, 7) + new Date().getTime();
                    // console.log(image2.originalFilename, image2.filepath, image2.mimetype)
                    addpost(uid, postid, content[0], date[0], photo).then(response => {
                        console.log("image added", response);
                        res.status(200).json({
                            status: 200,
                            message: 'post updated successfully'
                        });
                    }).catch(err => {
                        console.log("error uploading the image : ", err);
                        res.status(504).json({
                            status: 504,
                            message: "error uploading the post"
                        })
                    })
                }
                else {
                    const { content, date } = fields;
                    const postid = uid.slice(0, 7) + new Date().getTime();
                    addpost(uid, postid, content[0], date[0], null).then(response => {
                        console.log("image added", response);
                        res.status(200).json({
                            status: 200,
                            message: 'post added successfully'
                        });
                    }).catch(err => {
                        console.log("error uploading the image : ", err);
                        res.status(504).json({
                            status: 504,
                            message: "error uploading the post"
                        })
                    })
                }

            }
        });
    }
    else {
        res.status(405).json({
            status: 405,
            message: "only POST allowed"
        })
    }
}

export default apimiddleware(handler);