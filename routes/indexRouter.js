const { Router } = require("express");
const brandsRouter = require("./brandsRouter");
const addCarRouter = require("./addCarRouter");
const carCloseUpRouter = require("./carCloseUp");
const dashBoardController = require("../controlers/dashBoardController");

const indexRouter = Router();

indexRouter.get("/", dashBoardController);

indexRouter.use("/brand", brandsRouter)
indexRouter.use("/new_car", addCarRouter)
indexRouter.use("/car_view", carCloseUpRouter)

module.exports = indexRouter;