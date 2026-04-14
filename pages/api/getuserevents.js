import { db } from "@/src/utils/firebaseadmin";
async function handler(req, res) {
    if (req.method === "GET") {
        const data = [];
        
        // Always include the major event
        data.push({
            id: 'alumni-meet-2026',
            data: {
                event: "24th Alumni meet 2026",
                date: "18th of April 2026",
                link: "/events/alumni-meet-2026"
            }
        });

        try {
            const eventRef = db.collection('events').get();
            const eventDocs = (await eventRef).docs;
            for(const doc of eventDocs){
                data.push({id: doc.id, data: doc.data()});
            }
        } catch(err) {
            console.error("Error fetching events from Firestore:", err.message);
        }

        res.status(200).json({
            data: data
        })
    }
    else {
        res.status(405).json({
            status: 405,
            message: "only GET allowed"
        })
    }
}

export default handler