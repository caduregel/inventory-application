const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const showAllBrands = asyncHandler(async (req, res) => {
    const brands = await db.getAllBrandsWithCarcount();
    const unsortedBrands = await db.getAllBrands()

    if (!brands) { res.status(404).send('messages not found') }
    res.render("brands", {
        brands: brands,
        unsortedBrands: unsortedBrands,
    })
})

const brandZoomIn = asyncHandler(async (req, res) => {
    const cars = await db.getBrandCars(req.params.brandId)
    const brands = await db.getAllBrands()
    if (!cars) { res.status(404).send('brand not found') }

    res.render('brandCloseUp', { cars: cars, brandName: req.params.brandId, brands: brands });
})

module.exports = { showAllBrands, brandZoomIn }