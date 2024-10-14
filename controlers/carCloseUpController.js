const asyncHandler = require("express-async-handler");
const db = require("../db/queries");


const showCar = asyncHandler(async (req, res) => {
    const cars = await db.getAllCars()
    const brands = await db.getAllBrands()

    const car = cars.find(car => car.id == req.params.id)
    if (!car) { res.status(404).send('messages not found') }

    res.render('carCloseUp', { car: car, brands: brands, });
})

const deleteCar = asyncHandler(async (req, res) => {
    const carId = req.params.id;
    console.log(carId)
    db.deleteCar(carId)

    // Redirect back to the car list page (or wherever you want to go after deletion)
    res.redirect('/');
})

module.exports = { showCar, deleteCar }