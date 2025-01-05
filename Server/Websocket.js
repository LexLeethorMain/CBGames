const https = require('https');
const fs = require('fs');
const WebSocket = require('ws');

// Create an HTTPS server
const server = https.createServer({
    key: fs.readFileSync('/home/node/app/CBGames/Server/privkey.pem'), // SSL key
    cert: fs.readFileSync('/home/node/app/CBGames/Server/fullchain.pem'), // SSL certificate
});

// Create a WebSocket server that listens for incoming WebSocket connections on `wss://server:9092/EaglerRelay`
const wss = new WebSocket.Server({ server, path: '/EaglerRelay' });

// When a WebSocket connection is established from the client, handle it
wss.on('connection', (clientWs) => {
    console.log('Client connected to the proxy');

    // Create a new WebSocket connection to the internal WebSocket server
    const targetWs = new WebSocket('ws://192.168.50.142:6699');  // Internal WebSocket server

    // When the client sends a message, forward it to the internal WebSocket server
    clientWs.on('message', (message) => {
        if (targetWs.readyState === WebSocket.OPEN) {
            targetWs.send(message);
        }
    });

    // When the internal WebSocket server sends a message, forward it to the client
    targetWs.on('message', (message) => {
        if (clientWs.readyState === WebSocket.OPEN) {
            clientWs.send(message);
        }
    });

    // Error handling: if either connection closes, make sure to close the other
    clientWs.on('close', () => {
        console.log('Client connection closed');
        targetWs.close();
    });

    targetWs.on('close', () => {
        console.log('Target WebSocket connection closed');
        clientWs.close();
    });

    // Handle WebSocket errors
    clientWs.on('error', (err) => {
        console.error('Client WebSocket error:', err);
        targetWs.close();
    });

    targetWs.on('error', (err) => {
        console.error('Target WebSocket error:', err);
        clientWs.close();
    });
});

// Start the server on port 9092
server.listen(9092, () => {
    console.log('WebSocket proxy server is running on wss://server:9092');
});
