import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";
function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}
async function handler(req, res) {
    if (req.method === "GET") {
        const postid = req.query.pid;
        const action = req.query.action;
        const uid = req.body.uid;
        if (action === "like") {
            const documentRef = db.collection('posts').doc(postid);
            const getDocRef = documentRef.get();
            getDocRef.then(docsnapshot => {
                let likes = docsnapshot.data().likes;
                if (!likes.includes(uid)) {
                    likes.push(uid);
                }
                documentRef.set({
                    likes: likes
                }, { merge: true }).then(rs => {
                    res.status(200).json({
                        message: `liked the post ${postid}`
                    })
                })
                    .catch(err => {
                        res.status(504).json({
                            message: `cannot like the post ${postid}`
                        })
                    })
            }).catch(err => {
                res.status(504).json({
                    message: "some db error"
                })
            })
        }
        else if (action === "unlike") {
            const documentRef = db.collection('posts').doc(postid);
            const getDocRef = documentRef.get();
            getDocRef.then(docsnapshot => {
                let likes = docsnapshot.data().likes;
                if (likes.includes(uid)) {
                    likes = removeItemAll(likes, uid);
                }
                documentRef.set({
                    likes: likes
                }, { merge: true }).then(rs => {
                    res.status(200).json({
                        message: `unliked the post ${postid}`
                    })
                })
                    .catch(err => {
                        res.status(504).json({
                            message: `cannot unlike the post ${postid}`
                        })
                    })
            }).catch(err => {
                res.status(504).json({
                    message: "some db error"
                })
            })
        }
        else {
            res.status(405).json({
                status: 405,
                message: "only GET allowed"
            })
        }
    }
}

export default apimiddleware(handler);