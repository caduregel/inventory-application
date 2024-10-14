const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const dashBoardController = asyncHandler(async (req, res) => {
    const cars = await db.getAllCars()
    console.log(cars)
    const [...topBrands] = await db.getTopThreeBrands()
    const brands = await db.getAllBrands()
    const [carCount] = await db.getCarCount()
    if (!cars) { res.status(404).send('messages not found') }

    res.render("dashBoard", {
        allCars: cars,
        carCount: carCount.count,
        topBrands: topBrands,
        brands: brands,
    })
})

module.exports = dashBoardController