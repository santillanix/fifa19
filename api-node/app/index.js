'use strict'
var app = require('./app')

var port = process.env.PORT || 4100

app.listen(port, function () {
    console.log(`Server Funcionando por el puerto ${port}`);
})