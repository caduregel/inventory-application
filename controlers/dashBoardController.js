const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const dashBoardController = asyncHandler(async (req, res) => {
    const cars = await db.getAllCars()
    const [...topBrands] = await db.getTopThreeBrands()
    const brands = await db.getAllBrands()
    if (!cars) { res.status(404).send('messages not found') }

    res.render("dashBoard", {
        allCars: cars,
        carCount: 2,
        brandFirst: topBrands[0],
        brandSecond: topBrands[1],
        brandThird: topBrands[2],
        brands: brands,
    })
})

module.exports = dashBoardController