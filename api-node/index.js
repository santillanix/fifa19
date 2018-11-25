'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 4100

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.listen(port, function () {
    console.log(`Server Funcionando por el puerto ${port}`);
})