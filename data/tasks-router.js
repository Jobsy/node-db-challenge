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

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const { url } = req;

    dB.findTaskById(id)
        .then((tasks) => {

            if (tasks.length === 0) {
                res.status(404).json({ message: "The task with the specified ID does not exist." })
            }
            res.status(200).json({ taskInfo: tasks, url: url, operation: "GET"  })
        })
        .catch((err) => {
            res.status(500).json({ error: "The task information could not be retrieved." + err })
        })
})

module.exports = router;