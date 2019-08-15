//Variables of the system
const express = require('express');

//Functions created
const hello = require('./components/hello_world/hello_world')

//Create a router from express;
const routes = express.Router();

//GET
routes.get("/", hello.world);

//POST

module.exports = routes;