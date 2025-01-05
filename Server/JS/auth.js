// ---------------------------------------------
// Imports
// ---------------------------------------------
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const redis = require('redis');
const bodyParser = require('body-parser');
const mhtml2html = require('mhtml2html');
const { JSDOM } = require('jsdom');


// ---------------------------------------------
// Server Initialization
// ---------------------------------------------
const app = express();
const router = express.Router();
const redisClient = redis.createClient(); // Configure Redis

// ---------------------------------------------
// Middleware Setup
// ---------------------------------------------
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Session configuration
app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Set to true if using https
        httpOnly: true,
    },
}));

// ---------------------------------------------
// User Definitions
// ---------------------------------------------
const users = {
    'Alex': 'Luv4Duke2',
    'Jacob': 'Wooper@2',
    'Henry': 'butterdog5@',
    'Stalker👀': 'onhiscrush',
    'Benjie': 'rice11@rice',
    'Aidan': 'frozen-pizza-rolls',
    'Arjun': 'arjun2sucks',
    'Short Gremlin': 'short-kids-will-rule',
    'Zuri': 'WhaT12@',
    'Ben': 'peanut@butter',
    'RJ': '225720158',
    'John': '123456x8@',
    'Yves': 'dafunnygame1',
    'Jayce': 'N@Gon',
    'Fake John': 'john-dough',
    'Keena': 'Bipie2',
    'Bazinga': 'Luv4Bazinga',
    'Tripper Ralston': 'Barron Rav',
    'User': 'Test123'
};

// ---------------------------------------------
// Utility Functions
// ---------------------------------------------
function getDeviceType(userAgent) {
    if (userAgent.includes('CrOS')) return 'Chrome OS';
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Macintosh')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Unknown';
}

// Promote a function to check Redis connection
redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

// Connect to Redis
(async () => {
    try {
        await redisClient.connect();
        console.log('Redis client connected successfully.');
    } catch (err) {
        console.error('Failed to connect to Redis:', err);
        process.exit(1);
    }
})();

// ---------------------------------------------
// Login Route
// ---------------------------------------------
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userAgent = req.headers['user-agent'];
    const deviceType = getDeviceType(userAgent);
    const requestUrl = req.headers['host'];

    if (!users[username] || users[username] !== password) {
        const logEntry = `Failed Login on ${deviceType} attempting with ${username} from ${requestUrl}.`;
        console.log(logEntry);
        return res.redirect('/rick-roll');
    }

    const sessionKey = `active_session:${username}:${deviceType}:${requestUrl}`;

    try {
        // Check if an active session exists
        const existingSession = await redisClient.get(sessionKey);

        if (existingSession) {
            console.log(chalk.red(`Terminating existing session for ${username} on ${deviceType} (${requestUrl}).`));
            req.sessionStore.destroy(existingSession, (err) => {
                if (err) console.error('Error destroying session:', err);
            });
        }

        // Create a new session
        req.session.username = username;
        req.session.deviceType = deviceType;
        req.session.requestUrl = requestUrl;

        // Store in Redis
        await redisClient.set(sessionKey, req.sessionID, { EX: 36000 }); // 10-hour expiry

        console.log(chalk.green(`${username} logged in on ${deviceType} via ${requestUrl}. New session ID: ${req.sessionID}`));
        res.redirect('/Math');
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).send('Server error.');
    }
});

// ---------------------------------------------
// Middleware to Validate Session
// ---------------------------------------------
function validateSession(req, res, next) {
    const username = req.session.username;
    const deviceType = req.session.deviceType;
    const requestUrl = req.headers['host'];
    const sessionKey = `active_session:${username}:${deviceType}:${requestUrl}`;

    redisClient.get(sessionKey, (err, sessionId) => {
        if (err || !sessionId || sessionId !== req.sessionID) {
            return res.status(401).send('Invalid or expired session.');
        }
        next();
    });
}

// ---------------------------------------------
// Logout Route
// ---------------------------------------------
router.get('/logout', async (req, res) => {
    const username = req.session.username;
    const deviceType = req.session.deviceType;
    const requestUrl = req.session.requestUrl;

    if (username && deviceType && requestUrl) {
        const sessionKey = `active_session:${username}:${deviceType}:${requestUrl}`;
        await redisClient.del(sessionKey); // Remove from Redis
    }

    req.session.destroy(() => {
        res.redirect('/');
    });
});

// ---------------------------------------------
// Middleware to Check Logged In Status
// ---------------------------------------------
function CheckLoggedIn(req, res, next) {
    if (req.session.username) {
        return res.redirect('/Math');
    }
    next();
}

// ---------------------------------------------
// Serve Pages and Convert MHTML
// ---------------------------------------------
router.get('/', CheckLoggedIn, async (req, res) => {
    const filePath = path.join(__dirname, '../../public/Main', 'file.mhtml');
  
    if (!fs.existsSync(filePath)) {
        res.status(404).send('MHTML file not found');
        return;
    }
  
    try {
        const mhtmlContent = fs.readFileSync(filePath, 'utf8');
        const htmlDoc = mhtml2html.convert(mhtmlContent, {
            parseDOM: (html) => new JSDOM(html),
        });
  
        res.setHeader('Content-Type', 'text/html');
        res.send(htmlDoc.window.document.documentElement.outerHTML);
    } catch (error) {
        console.error('Error converting MHTML to HTML:', error);
        res.status(500).send('Failed to render MHTML');
    }
});

// ---------------------------------------------
// Rick Roll Route Minified
// ---------------------------------------------
router.get('/rick-roll', (req, res) => {
    res.send(`<!doctypehtml><title>Rickroll</title><style>body{margin:0;padding:0;overflow:hidden}video{position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-1}</style><video autoplay loop muted><source src="rickroll.mp4"type="video/mp4"></video>`);
});

// ---------------------------------------------
// Fallback 404 Handler
// ---------------------------------------------
app.use((req, res) => {
    if (!req.session.username) return res.redirect('/');
    res.status(404).sendFile(path.join(__dirname, '../public/Collections/404.html'));
});

// ---------------------------------------------
// Export Router
// ---------------------------------------------
module.exports = router;