const { Router } = require("express");
const showCar = require("../controlers/carCloseUpController");

const carCloseUpRouter = Router();

carCloseUpRouter.get('/:brand_model', showCar)

module.exports = carCloseUpRouter;