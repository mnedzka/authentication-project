// Main satarting point of the APP

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

// APP setup

// Server Setup
const port = proccess.env.port || 3090;
const server = http.createServer(app);
server.listen(port);

console.log("Server listen on port ", port);
