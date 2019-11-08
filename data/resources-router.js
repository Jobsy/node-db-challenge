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




module.exports = router;