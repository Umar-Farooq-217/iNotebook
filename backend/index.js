require("dotenv").config();

const connectToMongo = require("./db");

connectToMongo();

const express = require("express");
const app = express();

const port = 5000;

app.listen(port, () => {
    console.log(`iNotebook backend listening on port ${port}`);
});