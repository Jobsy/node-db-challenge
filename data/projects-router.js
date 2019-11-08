
const express = require("express");

const dB = require("./db");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json("It's workinggggggggggggggggg!!!")
})

// router.get("/", (req, res) => {
//     dB.find()
//         .then((cars) => {
//             res.status(200).json(cars)
//         })
//         .catch(() => {
//             res.status(500).json({ error: "The cars information could not be retrieved." })
//         })
// })

// router.get("/:id", (req, res) => {
//     const { id } = req.params;
//     const { url } = req;

//     dB.findById(id)
//         .then((cars) => {

//             if (cars.length === 0) {
//                 res.status(404).json({ message: "The car with the specified ID does not exist." })
//             }
//             res.status(200).json({ carInfo: cars, url: url, operation: "GET"  })
//         })
//         .catch((err) => {
//             res.status(500).json({ error: "The car information could not be retrieved." + err })
//         })
// })

// router.post("/", (req, res) => {
//     const car = req.body;
//     const { VIN, make, model, mileage,  transmissionType, status } = req.body;
//     const { url } = req;
//     if (!VIN || !make || !model || !mileage) {
//         res.status(400).json({ errorMessage: "Please provide atleast VIN, make, model, and mileage for the car." })
//     }
//     dB.insert(car)
//         .then(() => {
//             res.status(201).json({ carInfo: car, url: url, operation: "POST" })
//         })
//         .catch((err) => {
//             res.status(500).json({ error: "There was an error while saving the car to the database" + err})
//         })
// });


// router.put("/:id", (req, res) => {
//     const car = req.body;
//     const { VIN, make, model, mileage,  transmissionType, status } = req.body;
//     const { url } = req;
//     const { id } = req.params;

//     if (!VIN || !make || !model || !mileage) {
//         res.status(400).json({ errorMessage: "Please provide atleast VIN, make, model, and mileage for the car." })
//     }
//     dB.update(id, car)
//         .then((carsVIN) => {
//             if (carsVIN) {
//                 res.status(200).json({ updatedCarInfo: car, url: url, operation: "POST" })
//             }
//             res.status(404).json({ message: "The car with the specified ID does not exist." })
//         })
//         .catch((err) => {
//             res.status(500).json({ error: "The car information could not be modified." + err })
//         })
// })

// router.delete("/:id", (req, res) => {
//     const { id } = req.params;

//     dB.remove(id)
//         .then((rmCar) => {
//             if (rmCar === 0) {
//                 res.status(404).json({ message: "The car with the specified ID does not exist." })
//             }
//             res.status(200).json({ removedPost: `car with id: ${id} deleted` })
//         })
//         .catch((err) => {
//             res.status(500).json({ error: "The car could not be removed" + err})
//         })
// })

module.exports = router;