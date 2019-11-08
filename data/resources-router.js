const express = require("express");

const dB = require("./db");

const router = express.Router();

router.get("/", (req, res) => {
    dB.findResources()
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch((err) => {
            res.status(500).json({ error: "The projects information could not be retrieved." + err })
        })
})


module.exports = router;