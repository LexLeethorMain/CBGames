const express = require('express');
const path = require('path');
const chalk = require('chalk');
const router = express.Router();
const fs = require('fs');

// Middleware to check authentication
function isAuthenticated(req, res, next) {
    if (req.session.username) {
        return next();
    } else {
        res.redirect('https://ckr01.ngsc.k12.in.us/cgi-bin/blockpage/blockpage.cgi?...');
    }
}

// Serve the game page
router.get('/Collections/Ruffle/play', isAuthenticated, (req, res) => {
    const username = req.session.username;
    res.sendFile(path.join(__dirname, '../../public/Collections/Ruffle/play.html'));
    console.log(chalk.green(username + ' accessed Ruffle'));
});

// Load the games data from the JSON file
function loadGamesData() {
    const gamesData = fs.readFileSync(path.join(__dirname, 'games.json'), 'utf8');
    return JSON.parse(gamesData);
}

// Clear existing routes
function clearRoutes() {
    router.stack = router.stack.filter(layer => !layer.route || layer.route.path === '/Collections/Ruffle/play');
}

// Generate routes dynamically based on games data
function generateRoutes(games) {
    games.forEach(game => {
        router.get(game.route, isAuthenticated, (req, res) => {
            const username = req.session.username;

            if (req.query.loadGame) {
                // Serve the actual game content after restoring localStorage
                res.sendFile(path.join(__dirname, '../../public/Collections', game.file));
                console.log(chalk.green(`${username} loaded ${game.game}`));
            } else {
                // Serve the preload page with the restoration script
                const preloadScript = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading ${game.game}</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #121212;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            color: white;
        }

        .loader {
            position: relative;
            width: 100px;
            height: 100px;
        }

        .ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 8px solid transparent;
            border-top: 8px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="loader">
        <div class="ring"></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        // Function to restore localStorage
        async function restoreLocalStorage(gameId) {
            try {
                const response = await $.ajax({
                    url: '/restore-local-storage',
                    method: 'GET',
                    data: { gameId: gameId }
                });

                if (response.data) {
                    const restoredData = response.data;
                    for (const key in restoredData) {
                        if (restoredData.hasOwnProperty(key)) {
                            localStorage.setItem(key, restoredData[key]);
                        }
                    }
                    console.log('LocalStorage restored:', restoredData);
                } else {
                    console.log('No data to restore.');
                }
            } catch (error) {
                console.error('Error restoring localStorage:', error);
            }
        }

        // Call the function to restore data
        (async () => {
            await restoreLocalStorage("${game.id}");

            // After restoring, wait for 1 second before redirecting to load the game
            setTimeout(() => {
                window.location.href = "${game.route}?loadGame=true";
            }, 1000);  // 1000 milliseconds = 1 second
        })();
    </script>
</body>
</html>
                `;

                res.send(preloadScript);
                console.log(chalk.green(`${username} started restoring localStorage for ${game.game}`));
            }
        });

        console.log(chalk.blue(`Generated route for ${game.game}`));
    });
}

// Refresh the routes based on games data
function refreshRoutes() {
    clearRoutes();
    const gamesData = loadGamesData();
    generateRoutes(gamesData.htmlGames);
}

// Initial route generation
refreshRoutes();

// Endpoint to manually refresh routes
router.get('/refresh-routes', (req, res) => {
    refreshRoutes();
    res.send("Routes have been refreshed!");
});

module.exports = router;
