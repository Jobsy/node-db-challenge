
const express = require("express");
const server = express();
const cors = require("cors");
const router = require("./data/projects-router");
const router2 = require("./data/resources-router");
const router3 = require("./data/tasks-router");

server.use(express.json());
server.use(cors());
server.use("/api/projects", router);
server.use("/api/resources", router2);
server.use("/api/tasks", router3);

server.get("/", (req, res) => {
    res.send("hello world");
})

module.exports = server;