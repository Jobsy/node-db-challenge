
const express = require("express");

const dB = require("./db");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).json("It's workinggggggggggggggggg!!!")
// })

router.get("/", (req, res) => {
    dB.find()
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch((err) => {
            res.status(500).json({ error: "The projects information could not be retrieved." + err })
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const { url } = req;

    dB.findById(id)
        .then((projects) => {

            if (projects.length === 0) {
                res.status(404).json({ message: "The project with the specified ID does not exist." })
            }
            res.status(200).json({ projectInfo: projects, url: url, operation: "GET"  })
        })
        .catch((err) => {
            res.status(500).json({ error: "The project information could not be retrieved." + err })
        })
})



module.exports = router;