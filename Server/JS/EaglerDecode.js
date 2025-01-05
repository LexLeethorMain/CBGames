// Load necessary modules
const zlib = require('zlib');

// Base64 encoded string
const base64Data = "H4sIAAAAAAAA/x3MwQ7BQBQF0DsiURWJtZUvUIlVuxNrK18wOpe+GlOZW/w+sTybUwJzzMT8ZlYJwDksOgs8hJApocDEnlh/pKaq+pfGtrMYtzf/oJp6V+8LTNMPWJ0ssc3+Om7O/85hyeQvkcdhuBvlgC/Ab1AGbgAAAA==";

// Step 1: Decode Base64
const compressedBuffer = Buffer.from(base64Data, 'base64');

// Step 2: Decompress GZIP
zlib.gunzip(compressedBuffer, (err, result) => {
    if (err) {
        console.error("Decompression failed:", err);
    } else {
        // Convert to Hex and print the result
        const hexString = result.toString('hex');
        console.log("Decoded Result (Hex):", hexString);

        // Convert the buffer to UTF-8 and handle invalid characters
        try {
            const utf8String = result.toString('utf-8');
            console.log("Decoded Result (UTF-8):", utf8String);
        } catch (utf8Error) {
            console.error("UTF-8 Conversion failed:", utf8Error);
        }

        // Convert special characters to escape sequences
        const escapedString = result.toString('utf-8').replace(/[\x00-\x1F\x7F]/g, (match) => {
            return '\\x' + match.charCodeAt(0).toString(16).padStart(2, '0');
        });
        console.log("Escaped String (with special chars):", escapedString);
    }
});
