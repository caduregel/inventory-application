const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const getForm = asyncHandler(async (req, res) => {
    brands = await db.getAllBrands()
    res.render("newCar", { allBrands: brands })
})
const postForm = asyncHandler(async (req, res) => {
    const newCar = {
        brand: req.body.brands,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color,
        ammount: req.body.ammount,
    }
    console.log(newCar)
    db.postNewCar(newCar.brand, newCar.model, newCar.year, newCar.color, newCar.ammount)
    res.redirect('/')
})

module.exports = { getForm, postForm }