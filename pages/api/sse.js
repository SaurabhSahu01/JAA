import { db } from "@/src/utils/firebase";
import { doc, onSnapshot } from 'firebase/firestore';

export default function handler(req, res) {
  const uid = req.query.UID;
  // Set response headers for SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Create the profileRef and set up the real-time listener
  const profileRef = doc(db, 'users', uid, 'profile', 'profile');
  const unsubscribe = onSnapshot(profileRef, snapshot => {
    const eventData = JSON.stringify({ message: snapshot.data() });
    res.write(`data: ${eventData}\n\n`);
  });

  // Clean up the listener when the client disconnects
  req.on('close', () => {
    unsubscribe();
    res.end();
  });
}
