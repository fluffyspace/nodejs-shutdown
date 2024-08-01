const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

// Endpoint to shut down the computer
app.get('/shutdown', (req, res) => {
    // Execute the shutdown command
    exec('shutdown -s -t 60', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return res.status(500).send(`Error: ${error.message}`);
        }
        res.send('Shutting down the computer...');
    });
});

app.get('/cancel', (req, res) => {
    // Execute the shutdown command
    exec('shutdown -a', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return res.status(500).send(`Error: ${error.message}`);
        }
        res.send('Shut down cancelled.');
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
