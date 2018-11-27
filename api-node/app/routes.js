'use strict'

var express = require('express')
var api = express.Router()
//Controladores
var mercado = require('./controllers/mercado')

//Rutas
api.get('/prueba', mercado.buscarMercado)

module.exports = api