const express = require('express');
const path = require('path');
const app = express();

// Serve the ACME challenge files from the correct directory
app.use('/.well-known/acme-challenge', express.static(path.join(__dirname, 'acme-challenge')));

const PORT = 9092;  // HTTP port for validation
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
