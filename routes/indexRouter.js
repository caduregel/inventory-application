const { Router } = require("express");
const brandsRouter = require("./brandsRouter");
const addCarRouter = require("./addCarRouter");

const indexRouter = Router();

indexRouter.get("/", (req, res) => { res.render("index"), {} });
indexRouter.use("/brand", brandsRouter)
indexRouter.use("/new_car", addCarRouter)
indexRouter.use("/carView")

module.exports = indexRouter;