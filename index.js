const express = require('express');
const router = require('./routes/index');

const app = express();

router(app);

app.listen(3000, () => {
    console.log("[SERVER] initializated on port 3000");
});