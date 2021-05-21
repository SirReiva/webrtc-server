const http = require("http");
const express = require("express");
const config = require("./config");
const socket = require("./lib/socket");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());

server.listen(config.PORT, () => {
    socket(server);
    console.log("Server is listening at :", config.PORT);
});
