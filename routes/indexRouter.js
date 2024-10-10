const { Router } = require("express");
const brandsRouter = require("./brandsRouter");

const indexRouter = Router();

indexRouter.get("/", (req, res) => { res.render("index"), {} });
indexRouter.use("/brand", brandsRouter)

module.exports = indexRouter;