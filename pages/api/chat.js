import apimiddleware from "./apimiddleware";
import { db } from "@/src/utils/firebaseadmin";

async function handler(req, res) {
    if (req.method === "POST") {
        const sender = req.query.from;
        const receiver = req.query.to;

        // Indian Date
        const currentDateUTC = new Date();

        const ISTOffsetMinutes = 5 * 60 + 30;

        const currentISTTime = new Date(currentDateUTC.getTime() + (ISTOffsetMinutes * 60 * 1000));

        const day = currentISTTime.getDate();
        const month = currentISTTime.getMonth() + 1; // Month is 0-based, so add 1
        const year = currentISTTime.getFullYear();

        const formattedIndianDate = `${day}-${month}-${year}`;

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
            if (senderChatData[formattedIndianDate]) {
                const data = senderChatData[formattedIndianDate];
                senderRef.set({
                    [formattedIndianDate]: [...data, { time: indianTime, chatinfo: { uid: sender, message: message } }]
                }, { merge: true }).then(async rs => {
                    const receiverRef = db.collection('chats').doc(receiver).collection('chats').doc(sender);
                    const receiverRefData = await receiverRef.get();
                    // if the chats already exist
                    if (receiverRefData.exists) {
                        const receiverChatData = receiverRefData.data();
                        // if chats for that date exist
                        if (receiverChatData[formattedIndianDate]) {
                            const data = receiverChatData[formattedIndianDate];
                            receiverRef.set({
                                [formattedIndianDate]: [...data, { time: indianTime, chatinfo: { uid: sender, message: message } }]
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
                                [formattedIndianDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
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
                            [formattedIndianDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
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
                    [formattedIndianDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
                }, { merge: true }).then(async rs => {
                    const receiverRef = db.collection('chats').doc(receiver).collection('chats').doc(sender);
                    const receiverRefData = await receiverRef.get();
                    // if the chats already exist
                    if (receiverRefData.exists) {
                        const receiverChatData = receiverRefData.data();
                        // if chats for that date exist
                        if (receiverChatData[formattedIndianDate]) {
                            const data = receiverChatData[formattedIndianDate];
                            receiverRef.set({
                                [formattedIndianDate]: [...data, { time: indianTime, chatinfo: { uid: sender, message: message } }]
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
                                [formattedIndianDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
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
                            [formattedIndianDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
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
                [formattedIndianDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
            }).then(async response => {
                const receiverRef = db.collection('chats').doc(receiver).collection('chats').doc(sender);
                const receiverRefData = await receiverRef.get();
                // if the chats already exist
                if (receiverRefData.exists) {
                    const receiverChatData = receiverRefData.data();
                    // if chats for that date exist
                    if (receiverChatData[formattedIndianDate]) {
                        const data = receiverChatData[formattedIndianDate];
                        receiverRef.set({
                            [formattedIndianDate]: [...data, { time: indianTime, chatinfo: { uid: sender, message: message } }]
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
                            [formattedIndianDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
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
                        [formattedIndianDate]: [{ time: indianTime, chatinfo: { uid: sender, message: message } }]
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