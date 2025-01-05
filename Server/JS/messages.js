const express = require('express');
const path = require('path');
const fs = require('fs-extra');
const router = express.Router();
let messages = []; // Store all messages
let unreadCount = {}; // Store unread message counts for each user
let activeUsers = {}; // Store active users


// Path to store messages in a JSON file
const messagesFilePath = path.join(__dirname, 'messages.json');

// Load messages from file if it exists
fs.readFile(messagesFilePath, 'utf8', (err, data) => {
    if (!err && data) {
        messages = JSON.parse(data); // Load previous messages
    }
});

// Function to save messages to a file
function saveMessages() {
    fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2), err => {
        if (err) {
            console.error('Error saving messages:', err);
        }
    });
}

function isAuthenticated(req, res, next) {
    if (req.session.username) {
        return next();
    } else {
        res.redirect('/login');
    }
}
// Send a message
router.post('/send', isAuthenticated, (req, res) => {
    const { message } = req.body;
    const username = req.session.username;
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: true });

    if (!username || !message) {
        return res.status(400).send('Missing username or message');
    }

    messages.push({ username, message, timestamp });
    
    // Increment unread count for all users except the sender
    for (let user in unreadCount) {
        if (user !== username) {
            unreadCount[user] = (unreadCount[user] || 0) + 1;
        }
    }
    
    res.sendStatus(200);
    saveMessages();      // Persist the messages to a file
});

// Get all messages
router.get('/messages', isAuthenticated, (req, res) => {
    // Format each message as an HTML paragraph with line breaks
    const formattedMessages = messages.map(msg => 
        `<p><strong>${msg.timestamp} ${msg.username}:</strong> ${msg.message}</p>`
    ).join('');  // Join them together as HTML

    // Reset unread count for the user
    const username = req.session.username;
    unreadCount[username] = 0; // Mark messages as read
    
    res.send(formattedMessages); // Send HTML formatted messages
});

// Get unread message count
router.get('/unread-messages', isAuthenticated, (req, res) => {
    const username = req.session.username;
    const count = unreadCount[username] || 0; // Default to 0 if not found
    res.json({ unreadCount: count });
});

// Get active users
router.get('/active-users', isAuthenticated, (req, res) => {
    const userList = Object.keys(activeUsers); // Get the list of active users
    res.json({ activeUsers: userList });
});

// Get the latest message
router.get('/latest-message', isAuthenticated, (req, res) => {
    if (messages.length === 0) {
        return res.json({ message: null }); // Return null if no messages
    }

    const latestMessage = messages[messages.length - 1]; // Get the last message
    res.json({ username: latestMessage.username, message: latestMessage.message, timestamp: latestMessage.timestamp });
});

module.exports = router;
