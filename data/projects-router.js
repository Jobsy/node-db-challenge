
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


router.post("/", (req, res) => {
    const project = req.body;
    const { project_name, project_description, complete } = req.body;
    const { url } = req;
    if (!project_name) {
        res.status(400).json({ errorMessage: "Please provide atleast project_name, project_description, and complete for the project." })
    }
    dB.insert(project)
        .then(() => {
            res.status(201).json({ projectInfo: project, url: url, operation: "POST" })
        })
        .catch((err) => {
            res.status(500).json({ error: "There was an error while saving the project to the database" + err})
        })
});



////stretch
router.get('/:id/resources/tasks', (req, res) => {
  const { id } = req.params;
 
  dB.findAllByProject(id)
  .then(resourcesTasks => {
    if (resourcesTasks.length) {
      res.json(resourcesTasks);
    } else {
      res.status(404).json({ message: "Could not find resources and tasks for given project"})
    }
  })
  .catch(err => {
    res.status(500).json({ message: "Failed to get project's info" });
  });
});



module.exports = router;