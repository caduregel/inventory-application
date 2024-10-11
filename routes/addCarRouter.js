const { Router } = require("express");
const postForm = require("../controlers/newCarFormController");

const addCarRouter = Router();

addCarRouter.get("/", (req, res)=>{res.send("newCar", {})});
addCarRouter.post("/", postForm)

module.exports = addCarRouter;