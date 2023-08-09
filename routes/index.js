// Importing the Express router module
const router = require('express').Router();

// Handling a GET request to the root path ('/')
router.get('/', (req, res) => {
    // Sending the 'index.html' file as the response
    res.sendFile('index.html');
});

// Handling a POST request to the '/api' path
router.post('/api', (req, res) => {
    // Extracting JSON data from the request body
    const submitJson = req.body;
    
    // Responding with the same JSON data
    res.json(submitJson);
});

// Exporting the router to be used in other parts of the application
module.exports = router;
