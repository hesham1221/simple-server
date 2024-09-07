const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, this is a simple Express server!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
