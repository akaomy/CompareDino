const port = 8000;
const dino = require('../dino');
const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors(`https://localhost:${port}`));

app.get('/dino', (req, res) => {
    res.send(JSON.stringify(dino))
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})