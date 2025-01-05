const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

const router = express.Router();

// Middleware to check authentication
function isAuthenticated(req, res, next) {
    if (req.session.username) {
        return next();
    } else {
        res.redirect('/login');
    }
}

// Project save endpoint
router.post('/api/save', isAuthenticated, (req, res) => {
    const { file, data } = req.body;
    if (!file || !data) {
        return res.status(400).send('No project data received');
    }

    const projectsDir = path.join(__dirname, '../projects');
    if (!fs.existsSync(projectsDir)) {
        fs.mkdirSync(projectsDir, { recursive: true });
    }

    const projectPath = path.join(projectsDir, `${file}.json`);
    fs.writeFile(projectPath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error saving project data:', err);
            return res.status(500).send('Failed to save project');
        }
        console.log(`Project data saved for ${req.session.username}`);
        res.status(200).send({ message: 'Project saved successfully!' });
    });
});

module.exports = router;
