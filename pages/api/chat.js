import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "POST") {
        const sender = req.query.from;
        const receiver = req.query.to;
        const date = new Date().toLocaleDateString();
        let time = req.body.time;
        const message = req.body.message;
        if(!time.includes('am') && !time.includes('pm')){
            let hour = Number(time.slice(0,3));
            // console.log("Hour : ", hour);
            if(hour >= 13 && hour <= 23){
                hour = (hour % 12);
                time = hour + time.slice(3) + ' pm';
            }
            else if(hour >= 1 && hour <= 11){
                time = hour + time.slice(3) + ' am';
            }
            else if(hour === 12){
                time = hour + time.slice(3) + ' pm';
            }
            else if(hour === 24){
                time = 12 + time.slice(3) + ' am';
            }
        }
        // console.log("time in am or pm : ",time);
        
        // get the datewise chat and update it, if not exists then make new on 
        
        const senderRef = db.collection('chats').doc(sender).collection('chats').doc(receiver);
        const senderRefData = await senderRef.get()
        if (senderRefData.exists) {
            const senderChatData = senderRefData.data();
            // if chats for that date exist
            if(senderChatData[date]){
                const data = senderChatData[date];
                senderRef.set({
                    [date]: [...data, {time: time, chatinfo:{uid: sender, message: message}}]
                }, {merge: true}).then(async rs => {
                    const receiverRef = db.collection('chats').doc(receiver).collection('chats').doc(sender);
                const receiverRefData = await receiverRef.get();
                // if the chats already exist
                if (receiverRefData.exists) {
                    const receiverChatData = receiverRefData.data();
                    // if chats for that date exist
                    if(receiverChatData[date]){
                        const data = receiverChatData[date];
                        receiverRef.set({
                            [date]: [...data, {time: time, chatinfo:{uid: sender, message: message}}]
                        }, {merge: true}).then(rs => {
                            res.status(200).json({
                                message: "chats updated"
                            })
                        }).catch(err => {
                            res.status(504).json({
                                message: "db error"
                            })
                        })
                    }
                    // if the chats for that date don't exist
                    else{
                        receiverRef.set({
                            [date]: [{ time: time, chatinfo: { uid: sender, message: message } }]
                        }, {merge: true}).then(rs => {
                            res.status(200).json({
                                message: "chats updated"
                            })
                        })
                    }
                }
                // if the chats don't exist already
                else {
                    receiverRef.set({
                        [date]: [{ time: time, chatinfo: { uid: sender, message: message } }]
                    }).then(response2 => {
                        res.status(200).json({
                            message: "chats updated"
                        })
                    }).catch(err => {
                        res.status(504).json({
                            message: `${receiver} messages can't be updated`
                        })
                    })
                }
                }).catch(err => {
                    res.status(504).json({
                        message: "db error"
                    })
                })
            }
            // if the chats for that date don't exist
            else{
                senderRef.set({
                    [date]: [{ time: time, chatinfo: { uid: sender, message: message } }]
                }, {merge: true}).then(async rs => {
                    const receiverRef = db.collection('chats').doc(receiver).collection('chats').doc(sender);
                const receiverRefData = await receiverRef.get();
                // if the chats already exist
                if (receiverRefData.exists) {
                    const receiverChatData = receiverRefData.data();
                    // if chats for that date exist
                    if(receiverChatData[date]){
                        const data = receiverChatData[date];
                        receiverRef.set({
                            [date]: [...data, {time: time, chatinfo:{uid: sender, message: message}}]
                        }, {merge: true}).then(rs => {
                            res.status(200).json({
                                message: "chats updated"
                            })
                        }).catch(err => {
                            res.status(504).json({
                                message: "db error"
                            })
                        })
                    }
                    // if the chats for that date don't exist
                    else{
                        receiverRef.set({
                            [date]: [{ time: time, chatinfo: { uid: sender, message: message } }]
                        }, {merge: true}).then(rs => {
                            res.status(200).json({
                                message: "chats updated"
                            })
                        })
                    }
                }
                // if the chats don't exist already
                else {
                    receiverRef.set({
                        [date]: [{ time: time, chatinfo: { uid: sender, message: message } }]
                    }).then(response2 => {
                        res.status(200).json({
                            message: "chats updated"
                        })
                    }).catch(err => {
                        res.status(504).json({
                            message: `${receiver} messages can't be updated`
                        })
                    })
                }
                })
            }
        }
        else {
            senderRef.set({
                [date]: [{ time: time, chatinfo: { uid: sender, message: message } }]
            }).then(async response => {
                const receiverRef = db.collection('chats').doc(receiver).collection('chats').doc(sender);
                const receiverRefData = await receiverRef.get();
                // if the chats already exist
                if (receiverRefData.exists) {
                    const receiverChatData = receiverRefData.data();
                    // if chats for that date exist
                    if(receiverChatData[date]){
                        const data = receiverChatData[date];
                        receiverRef.set({
                            [date]: [...data, {time: time, chatinfo:{uid: sender, message: message}}]
                        }, {merge: true}).then(rs => {
                            res.status(200).json({
                                message: "chats updated"
                            })
                        }).catch(err => {
                            res.status(504).json({
                                message: "db error"
                            })
                        })
                    }
                    // if the chats for that date don't exist
                    else{
                        receiverRef.set({
                            [date]: [{ time: time, chatinfo: { uid: sender, message: message } }]
                        }, {merge: true}).then(rs => {
                            res.status(200).json({
                                message: "chats updated"
                            })
                        })
                    }
                }
                // if the chats don't exist already
                else {
                    receiverRef.set({
                        [date]: [{ time: time, chatinfo: { uid: sender, message: message } }]
                    }).then(response2 => {
                        res.status(200).json({
                            message: "chats updated"
                        })
                    }).catch(err => {
                        res.status(504).json({
                            message: `${receiver} messages can't be updated`
                        })
                    })
                }
            }).catch(err => {
                res.status(504).json({
                    message: "some db error"
                })
            })
        }
    }
    else {
        res.status(405).json({
            status: 405,
            message: "only POST allowed"
        })
    }
}

export default apimiddleware(handler)