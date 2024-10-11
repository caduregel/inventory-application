const { Router } = require("express");
const brandsRouter = require("./brandsRouter");
const addCarRouter = require("./addCarRouter");
const carCloseUpRouter = require("./carCloseUp");

const indexRouter = Router();

indexRouter.get("/", (req, res) => { res.render("dashBoard"), {} });

indexRouter.use("/brand", brandsRouter)
indexRouter.use("/new_car", addCarRouter)
indexRouter.use("/carView", carCloseUpRouter)

module.exports = indexRouter;