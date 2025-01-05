const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');
const { exec } = require('child_process');
const readline = require('readline');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 9086;

// In-memory storage for logs
const logs = [];

// Setup readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Logging test script.');
console.log('Type "show" to display all logs, "clear" to clear logs, "exit" to quit.');

// Folder to save files
const saveFolder = path.join(__dirname, 'saved_files');
if (!fs.existsSync(saveFolder)) fs.mkdirSync(saveFolder);

// Use a Set to store unique URLs
const capturedPaths = new Set();

// Helper function to extract paths from log messages
const extractPaths = (message) => {
    const pathRegex = /GET\s([^\s]+)/g; // Regex to capture paths from GET requests
    const matches = message.match(pathRegex);
    if (matches) {
        matches.forEach((match) => {
            const path = match.split(' ')[1]; // Extract path (e.g., '/images/apps/twitch.png')
            capturedPaths.add(path);
        });
    }
};

// Middleware to capture morgan logs and push to `logs`
morgan.token('url', (req) => req.originalUrl);
const logFormat = ':method :url :status :response-time ms - :res[content-length]';
const logger = morgan(logFormat, {
    stream: {
        write: (message) => {
            logs.push(message);
            extractPaths(message); // Extract paths from every log message
        }
    }
});

// Proxy middleware
const proxyMiddleware = createProxyMiddleware({
    target: 'https://coderpatsy.bitbucket.io/cookies/editor.html',
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
        const fullUrl = `https://coderpatsy.bitbucket.io/cookies/editor.html${req.url}`;
        console.log(`Received request for: ${req.url}`);
        console.log(`Constructed full URL: ${fullUrl}`);
    },
    onError: (err, req, res) => {
        console.error('Proxy error:', err.message);
        res.status(500).send('Something went wrong.');
    },
});

// Apply the morgan logger and proxy middleware
app.use(logger); // Use morgan logging
app.use('/', proxyMiddleware);

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
    console.log('Type "save" in the console to download logged URLs.');
});

// Handle readline input
rl.on('line', (input) => {
    const command = input.trim().toLowerCase();

    if (command === 'show') {
        console.log('Captured Paths:');
        capturedPaths.forEach((path, index) => console.log(`${index + 1}: ${path}`));
    } else if (command === 'clear') {
        capturedPaths.clear();
        console.log('Paths cleared.');
    } else if (command === 'exit') {
        console.log('Exiting script.');
        rl.close();
    } else {
        console.log(`Unknown command: ${command}`);
    }
});

rl.on('close', () => {
    console.log('Goodbye!');
    process.exit(0);
});
// Handle "save" command to download URLs using curl
rl.on('line', (input) => {
    console.log(logs)
    if (input.trim().toLowerCase() === 'save') {
        if (capturedPaths.size === 0) {
            console.log('No URLs to save.');
            return;
        }

        console.log(`Saving ${capturedPaths.size} files...`);
        Array.from(capturedPaths).forEach((path, index) => {
            // Check if it's a directory (path ends with '/')
            if (path.endsWith('/')) {
                // Treat directory as 'index.html'
                path = path + 'index.html'; // Append 'index.html' to the directory path
            }

            // Extract folder and filename parts
            const folderPath = path.substring(0, path.lastIndexOf('/')); // Extract folder part
            const filename = path.substring(path.lastIndexOf('/') + 1); // Extract file part

            // Define the full folder path
            const fullFolderPath = saveFolder + '/' + folderPath;
            if (!fs.existsSync(fullFolderPath)) {
                fs.mkdirSync(fullFolderPath, { recursive: true }); // Create the folder if it doesn't exist
            }

            // Full file path in respective folder
            const filePath = fullFolderPath + '/' + filename;

            // Create the curl command to download the file
            const command = `curl -o "${filePath}" "https://mrmine.com/game/desktop${path}"`;

            exec(command, (err, stdout, stderr) => {
                if (err) {
                    console.error(`Error saving file ${filePath}:`, err.message);
                } else {
                    console.log(`File saved: ${filePath}`);
                }
            });
        });

        // Clear captured paths after saving
        capturedPaths.clear();
        console.log('Captured URLs cleared after saving.');
    }
});
