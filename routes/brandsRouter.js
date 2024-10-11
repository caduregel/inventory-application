const { Router } = require("express");
const { brandZoomIn, showAllBrands } = require("../controlers/viewBrandController");

const brandsRouter = Router();

brandsRouter.get("/", showAllBrands)
brandsRouter.get('/:brandId', brandZoomIn)

module.exports = brandsRouter;