const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')

//database
mongoose.connect(config.connectionString)

// load routes
const carRoutes = require('./routes/car-route')
const driverRoutes = require('./routes/driver-route')
const driverCarRoutes = require('./routes/driver-car-route')

app.use(bodyParser.json({
  limit: '5mb'
}));

app.use(bodyParser.urlencoded({extended:false}))

// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/car', carRoutes);
app.use('/driver', driverRoutes);
app.use('/driver-car', driverCarRoutes);

module.exports = app
