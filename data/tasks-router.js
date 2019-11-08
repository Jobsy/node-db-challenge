const express = require("express");

const dB = require("./db");

const router = express.Router();

router.get("/", (req, res) => {
    dB.findTasks()
        .then((tasks) => {
            res.status(200).json(tasks)
        })
        .catch((err) => {
            res.status(500).json({ error: "The tasks information could not be retrieved." + err })
        })
})


module.exports = router;