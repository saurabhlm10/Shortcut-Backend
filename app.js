require("dotenv").config();

require('./config/db').connectToDB()

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const shortcutRoutes = require('./routes/shortcutRoutes')
app.use('/', shortcutRoutes)

module.exports = app;
