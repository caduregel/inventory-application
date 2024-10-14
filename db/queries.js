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

async function getAllBrands() {
    const { rows } = await pool.query("SELECT * FROM brands;")
    return rows
}

async function getAllBrandsWithCarcount() {
    const { rows } = await pool.query("SELECT brandname, logo, SUM(cars.count) AS car_count FROM brands JOIN cars ON brands.brandname = cars.brand GROUP BY brands.brandname, brands.logo ORDER BY car_count;")
    return rows
}

async function getBrandCars(brand) {
    const { rows } = await pool.query("SELECT * FROM cars WHERE cars.brand = $1", [brand])
    return rows
}

async function postNewCar(brand, model, year, color, ammount) {
    const query = {
        text: 'INSERT INTO cars(brand, model, year, color, "count") VALUES($1, $2, $3, $4, $5)',
        values: [brand, model, year, color, ammount]
    }

    await pool.query(query.text, query.values)
}

async function deleteCar(carId){
    const query = `DELETE FROM cars WHERE id = $1`;

    // Execute the query
    await pool.query(query, [carId]);
}

async function getCarCount(){
    const query = 'SELECT SUM(count) AS count FROM cars;'
    const {rows} = await pool.query(query)
    return rows
}

    module.exports = {
        getAllCars,
        getTopThreeBrands,
        getAllBrands,
        getAllBrandsWithCarcount,
        getBrandCars,
        getCarCount,
        postNewCar,
        deleteCar,
    };