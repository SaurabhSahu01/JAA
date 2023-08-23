import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "POST") {
        const sender = req.query.from;
        const receiver = req.query.to;

        // Indian Date
        const dateOptions = { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' };
        const indianDate = new Date().toLocaleDateString(undefined, dateOptions); // "23/08/2023"

        // Convert to "YYYY-MM-DD" format
        const dateArray = indianDate.split('/');
        const formattedDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`; // "2023-08-23"

        console.log(formattedDate);

        // Indian Time
        const currentDate = new Date();

        const options = {
            timeZone: 'Asia/Kolkata',
            hour12: true, // Use 24-hour format
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        const indianTime = new Intl.DateTimeFormat('en-IN', options).format(currentDate);


        const message = req.body.message;

        // get the datewise chat and update it, if not exists then make new on 

        const senderRef = db.collection('chats').doc(sender).collection('chats').doc(receiver);
        const senderRefData = await senderRef.get()
        if (senderRefData.exists) {
            const senderChatData = senderRefData.data();
            // if chats for that date exist
            if (senderChatData[formattedDate]) {
                const data = senderChatData[formattedDate];
                senderRef.set({
                    [formattedDate]: [...data, { time: indianTime, chatinfo: { uid: sender, message: message } }]
                }, { merge: true }).then(async rs => {
                    const receiverRef = db.collection('chats').doc(receiver).collection('chats').doc(sender);
                    const receiverRefData = await receiverRef.get();
                    // if the chats already exist
                    if (receiverRefData.exists) {
                        const receiverChatData = receiverRefData.data();
                        // if chats for that date exist
                        if (receiverChatData[formattedDate]) {
                            const data = receiverChatData[formattedDate];
                            receiverRef.set({
                                [formattedDate]: [...data, { time: indianTime, chatinfo: { uid: sender, message: message } }]
                            }, { merge: true }).then(rs => {
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
                        else {
                            receiverRef.set({
                                [formattedDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
                            }, { merge: true }).then(rs => {
                                res.status(200).json({
                                    message: "chats updated"
                                })
                            })
                        }
                    }
                    // if the chats don't exist already
                    else {
                        receiverRef.set({
                            [formattedDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
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
            else {
                senderRef.set({
                    [formattedDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
                }, { merge: true }).then(async rs => {
                    const receiverRef = db.collection('chats').doc(receiver).collection('chats').doc(sender);
                    const receiverRefData = await receiverRef.get();
                    // if the chats already exist
                    if (receiverRefData.exists) {
                        const receiverChatData = receiverRefData.data();
                        // if chats for that date exist
                        if (receiverChatData[formattedDate]) {
                            const data = receiverChatData[formattedDate];
                            receiverRef.set({
                                [formattedDate]: [...data, { time: indianTime, chatinfo: { uid: sender, message: message } }]
                            }, { merge: true }).then(rs => {
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
                        else {
                            receiverRef.set({
                                [formattedDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
                            }, { merge: true }).then(rs => {
                                res.status(200).json({
                                    message: "chats updated"
                                })
                            })
                        }
                    }
                    // if the chats don't exist already
                    else {
                        receiverRef.set({
                            [formattedDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
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
                [formattedDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
            }).then(async response => {
                const receiverRef = db.collection('chats').doc(receiver).collection('chats').doc(sender);
                const receiverRefData = await receiverRef.get();
                // if the chats already exist
                if (receiverRefData.exists) {
                    const receiverChatData = receiverRefData.data();
                    // if chats for that date exist
                    if (receiverChatData[formattedDate]) {
                        const data = receiverChatData[formattedDate];
                        receiverRef.set({
                            [formattedDate]: [...data, { time: indianTime, chatinfo: { uid: sender, message: message } }]
                        }, { merge: true }).then(rs => {
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
                    else {
                        receiverRef.set({
                            [formattedDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
                        }, { merge: true }).then(rs => {
                            res.status(200).json({
                                message: "chats updated"
                            })
                        })
                    }
                }
                // if the chats don't exist already
                else {
                    receiverRef.set({
                        [formattedDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
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