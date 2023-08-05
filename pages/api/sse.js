import { db } from "@/src/utils/firebase";

export default function handler(req, res) {
    
    // Set response headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Send an initial event to establish the SSE connection
    res.write(JSON.stringify({data: 'Connected'}));
  
    // Set up a timer to send updates at regular intervals
    const intervalId = setInterval(() => {
      const eventData = JSON.stringify({ message: 'This is a real-time update.' });
      res.write(`data: ${eventData}\n\n`);
    }, 1000); // Send an update every 5 seconds
  
    // Clean up the interval and close the response when the client disconnects
    req.on('close', () => {
      clearInterval(intervalId);
      res.end();
    });
  }
  