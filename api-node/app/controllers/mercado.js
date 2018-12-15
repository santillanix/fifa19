/*
Busca en el Mercado de Fichajes
*/
function buscarMercado(req, res) {

    console.log(req.params)

    res.status(200).send({
        data: "-"
    })

}

function saludar(req, res) {

    res.status(200).send({
        data: "hola Carol"
    })
}

module.exports = {
    buscarMercado,
    saludar
}