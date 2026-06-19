const express = require("express");

const app = express();

// port passed from terminal
const PORT = process.argv[2] || 3000;

app.get("/", (req, res) => {
    res.send(`Response from server running on PORT ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});