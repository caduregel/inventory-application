const { Router } = require("express");
const showCar = require("../controlers/carCloseUpController");

const carCloseUpRouter = Router();

carCloseUpRouter.get('/:id', showCar)

module.exports = carCloseUpRouter;