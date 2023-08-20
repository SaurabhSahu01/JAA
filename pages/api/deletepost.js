import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    if(req.method === "GET"){
        const postID = req.query.pid;
        const docRef = db.collection('posts').doc(postID);
        docRef.delete()
            .then(response => {
                res.status(200).json({
                    message: `${postID} deleted successfully`
                })
            })
            .catch(err => {
                res.status(504).json({
                    message: `cannot delete ${postID}`
                })
            })
    }
    else{
        res.status(405).json({
            status: 405,
            message: "only GET allowed"
        })
    }
}

export default apimiddleware(handler);