import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res){
    if(req.method === "GET"){
        const postid = req.query.pid;
        const action = req.query.action;
        if(action === "like"){
            const documentRef = db.collection('posts').doc(postid);
            const getDocRef = documentRef.get();
            getDocRef.then(docsnapshot => {
                const likes = docsnapshot.data().likes;
                documentRef.set({
                    likes: likes+1
                }, {merge: true}).then(response => {
                    res.status(200).json({
                        message: `${action}d ${postid}`
                    })
                }).catch(err => {
                    res.status(504).json({
                        message: "can't like the post, some db error"
                    })
                })
            }).catch(err => {
                res.status(504).json({
                    message: 'some database error'
                })
            })
        }
        else if(action === "unlike"){
            const documentRef = db.collection('posts').doc(postid);
            const getDocRef = documentRef.get();
            getDocRef.then(docsnapshot => {
                const likes = docsnapshot.data().likes;
                documentRef.set({
                    likes: likes-1
                }, {merge: true}).then(response => {
                    res.status(200).json({
                        message: `${action}d ${postid}`
                    })
                }).catch(err => {
                    res.status(504).json({
                        message: "can't unlike the post, some db error"
                    })
                })
            }).catch(err => {
                res.status(504).json({
                    message: 'some database error'
                })
            })
        }
    }
    else{
        res.status(405).json({
            status: 405,
            message: "only GET allowed"
        })
    }
}

export default apimiddleware(handler);