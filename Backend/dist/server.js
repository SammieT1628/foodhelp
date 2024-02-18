"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4000;
const mongodbURL = process.env.DB_CONN_STRING;
const mongoose = require('mongoose');
const app = express();
const connect = async () => {
    mongoose.connect(mongodbURL)
        .then(() => console.log('Connected to database SmolOne'))
        .catch((err) => console.log(err));
};
connect();
app.use(cors());
app.use(express.json());
app.get('/message', (req, res) => {
    //fetchData()
    res.json({ message: "Hello from server!" });
});
app.listen(port, () => {
    console.log(`Server is running on port 8000.`);
});
//# sourceMappingURL=server.js.map