const { Router } = require("express");
const {showCar, deleteCar} = require("../controlers/carCloseUpController");

const carCloseUpRouter = Router();

carCloseUpRouter.get('/:id', showCar)

carCloseUpRouter.delete('/:id', deleteCar);

module.exports = carCloseUpRouter;