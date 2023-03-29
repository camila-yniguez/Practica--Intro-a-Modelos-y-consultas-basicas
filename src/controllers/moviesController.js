const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render("moviesList", {movies})
        })
    },

    new: (req, res) => {
        db.Movie.findAll({
            order: [["release_date", "DESC"]]
        })
        .then(movies => res.render("newestMovies", {movies}))

    },    
    
    recomended: (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[Op.gte]: 8 }
            },
            order: [["rating", "DESC"]],
            limit: 5,
        })
        .then(movies => res.render("recommendedMovies.ejs", {movies} ))

    },    
    
    detail: (req, res) => {
        const movieId = req.params.id;
        db.Movie.findByPk(movieId)
            .then(movie => {
                return res.render("moviesDetail", {movie})
            })

    },
}