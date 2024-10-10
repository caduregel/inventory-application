const { Router } = require("express");

const brandsRouter = Router();

brandsRouter.get("/", (req, res) => {
    res.send("Here are the brands:")
})

brandsRouter.get('/:brandId', (req, res) => {
    const { brandId } = req.params
    res.send("Brand: " +brandId)
})

module.exports = brandsRouter;