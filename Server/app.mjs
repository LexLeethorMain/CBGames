import express from 'express';
import path from 'path';

// Get the directory name using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public/Webcontainer')));

// Serve the index.html page when accessing the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/webcontainer', 'index.html'));
});

// This route will initialize the WebContainer and run an Express server
app.post('/start-webcontainer', async (req, res) => {
    const { code } = req.body; // Assuming you're sending code to run inside the container

    if (!code) {
        return res.status(400).json({ error: 'Code not provided.' });
    }

    try {
        // Initialize WebContainer API
        const webcontainerAPI = new WebContainer(); // Initialize WebContainer

        // Mount the container's assets
        await webcontainerAPI.mount('/app', path.join(__dirname, '../public', 'Webcontainer')); // Path where your container assets are

        // Run the provided code inside the WebContainer
        const { stdout, stderr } = await webcontainerAPI.run({
            cmd: 'node',
            args: ['-e', code] // Execute the provided code inside WebContainer
        });

        // Capture the output
        console.log('Container Output:', stdout);
        if (stderr) {
            console.error('Container Error:', stderr);
        }

        // Send back the status
        res.json({ message: 'Webcontainer started successfully!', output: stdout });
    } catch (error) {
        console.error('Webcontainer Error:', error);
        res.status(500).json({ error: 'Failed to start the Webcontainer.' });
    }
});

// Start the Express server
app.listen(9092, () => {
    console.log('Server running on port 9092');
});
