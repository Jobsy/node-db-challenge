const express = require("express");

const dB = require("./db");

const router = express.Router();

router.get("/", (req, res) => {
    dB.findResources()
        .then((resources) => {
            res.status(200).json(resources)
        })
        .catch((err) => {
            res.status(500).json({ error: "The resources information could not be retrieved." + err })
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const { url } = req;

    dB.findResourceById(id)
        .then((resources) => {

            if (resources.length === 0) {
                res.status(404).json({ message: "The resource with the specified ID does not exist." })
            }
            res.status(200).json({ resourceInfo: resources, url: url, operation: "GET"  })
        })
        .catch((err) => {
            res.status(500).json({ error: "The resource information could not be retrieved." + err })
        })
})

router.post("/", (req, res) => {
    const resource = req.body;
    const { resource_name, resource_description} = req.body;
    const { url } = req;
    if (!resource_name) {
        res.status(400).json({ errorMessage: "Please provide atleast resource_name, and resource_description for the resource." })
    }
    dB.insert(resource)
        .then(() => {
            res.status(201).json({ resourceInfo: resource, url: url, operation: "POST" })
        })
        .catch((err) => {
            res.status(500).json({ error: "There was an error while saving the resource to the database" + err})
        })
});





module.exports = router;