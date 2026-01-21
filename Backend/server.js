"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("./db");
var cors = require('cors');
require('dotenv').config();
var port = process.env.PORT || 4000;
var app = express();
(0, db_1.default)();
app.use(cors());
app.use(express.json());
app.get('/message', function (req, res) {
    res.json({ message: "Hello from server!" });
});
app.listen(port, function () {
    console.log("Server is running on port 8000.");
});
