const db = require("../database/models");

module.exports = {
    list: (req, res) => {
        /* Retorna la vista genresList con todos los generos de la base de datos */
        db.Genre.findAll()
        //metodo findAll que encuentra todos los registros que haya en la tabla de generos
        .then((genres) => {
            return res.render("genresList", {genres})
        })
    },
    detail: (req, res) => {

    }
}