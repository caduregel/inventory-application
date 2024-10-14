const path = require("node:path");
require("dotenv").config('./.env');
const methodOverride = require('method-override')
const db = require("./db/queries");

// Express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Routes
const indexRouter = require('./routes/indexRouter')

app.use('/', indexRouter)

// Tell app to listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));