const bcrypt 		= require('bcryptjs');

const db	        = require('../middlewares/connection');


// User

    module.exports.selectUserById = (idSearched, callback) => { // selectUserById

        const queryText = 'SELECT * FROM schema.user WHERE schema.user.idUser = $1;';
        const queryValues = [idSearched];

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectUserByPseudo = (pseudoEntered, callback) => { // selectUserByPseudo

        const queryText = 'SELECT * FROM schema.user WHERE schema.user.pseudo = $1;';
        const queryValues = [pseudoEntered];

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.comparePassword = (pwdEntered, pwdHashed, callback) => { // comparePassword

        bcrypt.compare(pwdEntered, pwdHashed, (err, isMatch) => {

            if(err) throw err;
            callback(null, isMatch);
        });
    }

// Article

    module.exports.selectArticle = (idObject, callback) => { // selectArticle

        const queryText = 'SELECT * FROM schema.article WHERE idArticle = $1;';
        const queryValues = [idObject._id];

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectArticles = (callback) => { // selectArticles

        const queryText = 'SELECT * FROM schema.article;';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectArticlesByDate = (callback) => { // selectArticlesByYougestDate

        const queryText = 'SELECT * FROM schema.article ORDER BY creationdate DESC;';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectArticlesBySoon = (callback) => { // selectArticlesBySoon

        const queryText = 'SELECT * FROM schema.article WHERE creationDate > now();';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectArticlesByNote = (callback) => { // selectArticlesByYougestDate

        const queryText = 'SELECT * FROM schema.article ORDER BY note DESC;';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

// Serie

    module.exports.selectSerie = (idObject, callback) => { // selectSerie

        const queryText = 'SELECT * FROM schema.serie WHERE idSerie = $1;';
        const queryValues = [idObject._id];

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectSeries = (callback) => { // selectSeries

        const queryText = 'SELECT * FROM schema.serie;';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectSeriesByDate = (callback) => { // selectSeriesByYougestDate

        const queryText = 'SELECT * FROM schema.serie ORDER BY creationdate DESC;';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectSeriesByNote = (callback) => { // selectSeriesByYougestDate

        const queryText = 'SELECT * FROM schema.serie ORDER BY note DESC;';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

// Movie

    module.exports.selectMovie = (idObject, callback) => { // selectMovie

        const queryText = 'SELECT * FROM schema.article WHERE idMovie = $1;';
        const queryValues = [idObject._id];

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectMovies = (callback) => { // selectMovies

        const queryText = 'SELECT * FROM schema.movie;';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectMoviesByDate = (callback) => { // selectMoviesByYougestDate

        const queryText = 'SELECT * FROM schema.movie ORDER BY creationdate DESC;';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectMoviesByNote = (callback) => { // selectMoviesByYougestDate

        const queryText = 'SELECT * FROM schema.movie ORDER BY note DESC;';
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectMoviesBySoon = (callback) => { // selectMoviesBySoon

        const queryText = "SELECT * FROM schema.movie WHERE creationDate > now();";
        const queryValues = null;

        db.connectionPsql(queryText, queryValues, callback);
    }