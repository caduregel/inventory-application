const pool = require('./pool')


async function getAllCars() {
    const { rows } = await pool.query("SELECT * FROM cars")
    return rows
}

async function getTopThreeBrands() {
    const query = "SELECT brandname, SUM(cars.count) AS total_cars FROM cars JOIN brands ON cars.brand = brands.brandname GROUP BY brands.brandname ORDER BY total_cars DESC LIMIT 3;"
    const { rows } = await pool.query(query)
    return rows
}


module.exports = {
    getAllCars,
    getTopThreeBrands,
};