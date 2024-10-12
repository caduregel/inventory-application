const { Router } = require("express");
const {getForm, postForm} = require("../controlers/newCarFormController");

const addCarRouter = Router();

addCarRouter.get("/", getForm);
addCarRouter.post("/", postForm)

module.exports = addCarRouter;