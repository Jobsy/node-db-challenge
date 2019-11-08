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

router.post("/", (req, res) => {
    const task = req.body;
    const { task_name, task_description} = req.body;
    const { url } = req;
    if (!task_name) {
        res.status(400).json({ errorMessage: "Please provide atleast task_name, and task_description for the task." })
    }
    dB.insertTask(task)
        .then(() => {
            res.status(201).json({ taskInfo: task, url: url, operation: "POST" })
        })
        .catch((err) => {
            res.status(500).json({ error: "There was an error while saving the task to the database" + err})
        })
});


module.exports = router;