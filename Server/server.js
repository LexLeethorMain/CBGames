// ---------------------------------------------
// Imports
// ---------------------------------------------
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const NedbStore = require('nedb-session-store')(session);
const path = require('path');
const fs = require('fs-extra');
const { spawn } = require('child_process');
const http = require('http');
const https = require('https');
const socketIo = require('socket.io');
const chalk = require('chalk');
const axios = require('axios');
const WebContainer = require('@webcontainer/api').WebContainer;
const compression = require('compression');
const httpolyglot = require('httpolyglot');
const authRoutes = require('./JS/auth');
const messageRoutes = require('./JS/messages');
const projectRoutes = require('./JS/projects');
const pathRoutes = require('./JS/paths');

// ---------------------------------------------
// Server Initialization
// ---------------------------------------------
const app = express();

// Create a directory for ACME challenges
const acmeChallengePath = path.join(__dirname, 'acme-challenge');
fs.ensureDirSync(acmeChallengePath);
app.use('/.well-known/acme-challenge', express.static(acmeChallengePath));

// HTTPS Options
const httpsOptions = {
    key: fs.readFileSync('/home/node/app/CBGames/Server/privkey.pem'),
    cert: fs.readFileSync('/home/node/app/CBGames/Server/fullchain.pem'),
};

const server = httpolyglot.createServer(httpsOptions, (req, res) => {
    if (req.connection.encrypted || req.url.startsWith('/.well-known/acme-challenge')) {
        // Serve HTTPS or ACME challenge requests
        app(req, res);
    } else {
        // Redirect HTTP to HTTPS
        res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
        res.end();
    }
});


const io = socketIo(server); // Socket.IO on server

// ---------------------------------------------
// Middleware Setup
// ---------------------------------------------
app.use(bodyParser.urlencoded({ extended: false, limit: '100mb' }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(compression());
app.use(
    session({
        store: new NedbStore({
            filename: path.join(__dirname, 'Data/sessions', 'sessions.db'),
        }),
        secret: 'Cbgames-THe-best',
        resave: false,
        saveUninitialized: true,
        rolling: false,
        cookie: { maxAge: 36000000 }, // 10 hours
    })
);
app.use(express.static(path.join(__dirname, '../public'))); // Serve static files

//Intialize Modules
app.use(authRoutes);
app.use(pathRoutes);
app.use(messageRoutes);
app.use(projectRoutes);

// ---------------------------------------------
// Utility Functions
// ---------------------------------------------
const sessionDir = path.join(__dirname, 'sessions');
fs.ensureDirSync(sessionDir); // Ensure session directory exists

const knownHeadersPath = path.join(__dirname, 'knownHeaders.json');
const loadKnownHeaders = () => {
    try {
        return JSON.parse(fs.readFileSync(knownHeadersPath, 'utf8'));
    } catch {
        return [];
    }
};
const saveKnownHeaders = (headers) => {
    fs.writeFileSync(knownHeadersPath, JSON.stringify(headers, null, 2), 'utf8');
};

// Middleware to check authentication
function isAuthenticated(req, res, next) {
    if (req.session.username) return next();
    res.redirect('example.com');
}


// ---------------------------------------------
// Error Handling and Failsafe
// ---------------------------------------------
function runFailsafe() {
    console.log("Running failsafe...");
    const failsafeProcess = spawn('node', ['failsafe.js'], { stdio: 'inherit' });

    failsafeProcess.on('exit', (code) => {
        console.error(`Failsafe process exited with code ${code}.`);
    });
}

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    runFailsafe();
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    runFailsafe();
});

// ---------------------------------------------
// Routes
// ---------------------------------------------
app.post('/backup-local-storage', isAuthenticated, (req, res) => {
    const { data } = req.body;

    if (!data || typeof data !== 'object') {
        console.error('Error: Invalid data received for backup.');
        return res.status(400).json({ error: 'Invalid data.' });
    }

    const username = req.session.username;
    const sanitizedUsername = username.replace(/\s+/g, '_');
    const userDir = path.join(__dirname, 'Data/userData');
    const filePath = path.join(userDir, `${sanitizedUsername}_alldata.json`);

    fs.ensureDirSync(userDir);

    try {
        fs.writeFileSync(filePath, JSON.stringify(data), 'utf8');
        res.json({ message: 'Progress backed up successfully!' });
    } catch (error) {
        console.error('Error writing file:', error);
        res.status(500).json({ error: 'Failed to save progress.' });
    }
});

app.get('/restore-local-storage', isAuthenticated, async (req, res) => {
    const username = req.session.username;
    const sanitizedUsername = username.replace(/\s+/g, '_');
    const filePath = path.join(__dirname, 'Data/userData', `${sanitizedUsername}_alldata.json`);

    try {
        await fs.promises.access(filePath, fs.constants.F_OK);
        const data = await fs.promises.readFile(filePath, 'utf8');
        res.json({ data: JSON.parse(data) });
    } catch {
        res.json({ data: null });
    }
});

// Serve pages dynamically
app.get('/Math', isAuthenticated, (req, res) => {
    const username = req.session.username;
    fs.readFile(path.join(__dirname, '../public/Collections/index.html'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error loading page');
        res.send(data.replace(/{{username}}/g, username));
    });
});

app.get('/Settings', isAuthenticated, (req, res) => {
    fs.readFile(path.join(__dirname, '../public/Collections/Settings.html'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error loading page.');
        res.send(data);
    });
});

app.get('/Chat', isAuthenticated, (req, res) => {
    const username = req.session.username;
    fs.readFile(path.join(__dirname, '../public/Collections/Chat.html'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error loading page');
        res.send(data.replace(/{{username}}/g, username));
    });
});

app.get('/rick-roll', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head><title>Rickroll</title></head>
      <body><video autoplay loop muted><source src="rickroll.mp4" type="video/mp4"></video></body>
      </html>
    `);
});
// ---------------------------------------------
// Webcontainer API Setup
// ---------------------------------------------
const webcontainerAPI = new Webcontainer.Webcontainer();

// This route will initialize the Webcontainer and run an example script or server
app.post('/start-webcontainer', isAuthenticated, async (req, res) => {
    const { code } = req.body;  // Assuming you're sending code to run inside the container

    if (!code) {
        return res.status(400).json({ error: 'Code not provided.' });
    }

    try {
        // Initialize Webcontainer
        await webcontainerAPI.mount('/app', path.join(__dirname, '../public/Webcontainer')); // Path where your container assets are

        // Run your desired script inside the container
        const { stdout, stderr } = await webcontainerAPI.run({
            cmd: 'node', 
            args: ['-e', code]  // Execute the provided code inside Webcontainer
        });

        // Capture the output
        console.log('Container Output:', stdout);
        if (stderr) {
            console.error('Container Error:', stderr);
        }

        // Send the output back to the client
        res.json({ message: 'Webcontainer started successfully!', output: stdout });
    } catch (error) {
        console.error('Webcontainer Error:', error);
        res.status(500).json({ error: 'Failed to start the Webcontainer.' });
    }
});
// Fallback 404
app.use((req, res) => {
    if (!req.session.username) return res.redirect('/');
    res.status(404).sendFile(path.join(__dirname, '../public/Collections/404.html'));
});
// ---------------------------------------------
// Static MIME Types
// ---------------------------------------------
app.use((req, res, next) => {
    if (req.url.endsWith('.swf')) res.setHeader('Content-Type', 'application/x-shockwave-flash');
    if (req.url.endsWith('.wasm')) res.setHeader('Content-Type', 'application/wasm');
    next();
});


// ---------------------------------------------
// Socket.IO Setup
// ---------------------------------------------
const activeUsers = {}; // Object to store active users and their socket IDs
io.on('connection', (socket) => {
    socket.on('registerUser', (username) => {
        activeUsers[username] = socket.id;
        console.log(chalk.blue(`${username} accessed Chat`));
        io.emit('activeUsersUpdate', Object.keys(activeUsers));

        socket.on('disconnect', () => {
            delete activeUsers[username];
            io.emit('activeUsersUpdate', Object.keys(activeUsers));
        });
    });
});

// ---------------------------------------------
// Start Server
// ---------------------------------------------
// Listen on port 9092 for both HTTP and HTTPS requests
server.listen(9092, () => {
    console.log(chalk.green('Server running on port 9092 for both HTTP and HTTPS'));
});