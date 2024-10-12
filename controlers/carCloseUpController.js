const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const showCar = asyncHandler(async (req, res) => {
    const cars = await db.getAllCars()
    if (!cars) { res.status(404).send('messages not found') }
    console.log(req.params.id)
    const car = cars.find(car => car.id == req.params.id)
    console.log(car)
    res.render('carCloseUp', { car: car });
})

module.exports = showCar