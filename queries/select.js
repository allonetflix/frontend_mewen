const bcrypt 		= require('bcryptjs');

const db	        = require('../middlewares/connection');


// User

    module.exports.selectUserById = (idObject, callback) => { // selectUserById

        const queryText = 'SELECT * FROM schema.user WHERE schema.user.idUser = $1;';
        const queryValues = [idObject];

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

// Search 

module.exports.searchRessourcesArticles = (object, callback) => { // searchRessourcesArticles

    const queryText = 'SELECT * FROM schema.article WHERE title LIKE $1;';
    const queryValues = [object.search];

    db.connectionPsql(queryText, queryValues, callback);
}

module.exports.searchRessourcesSeries = (object, callback) => { // searchRessourcesSeries

    const queryText = 'SELECT * FROM schema.serie WHERE title LIKE $1;';
    const queryValues = [object.search];

    db.connectionPsql(queryText, queryValues, callback);
}

module.exports.searchRessourcesMovies = (object, callback) => { // searchRessourcesMovies

    const queryText = 'SELECT * FROM schema.movie WHERE title LIKE $1;';
    const queryValues = [object.search];

    db.connectionPsql(queryText, queryValues, callback);
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

    module.exports.selectArticleLike = (object, callback) => { // selectArticleLike

        const queryText = 'SELECT * FROM schema.article_like WHERE fk_idarticle = $1 AND fk_iduserlike = $2;';
        const queryValues = [object.fk_idarticle, object.fk_iduserlike];

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectNoteArticle = (object, callback) => { // selectNoteArticle

        const queryText = 'SELECT * FROM schema.article_note WHERE fk_idarticle = $1 AND fk_idusernote = $2;';
        const queryValues = [object.fk_idarticle, object.fk_idusernote];

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

    module.exports.selectSerieLike = (object, callback) => { // selectSerieLike

        const queryText = 'SELECT * FROM schema.serie_like WHERE fk_idserie = $1 AND fk_iduserlike = $2;';
        const queryValues = [object.fk_idserie, object.fk_iduserlike];

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectNoteSerie = (object, callback) => { // selectNoteSerie

        const queryText = 'SELECT * FROM schema.serie_note WHERE fk_idserie = $1 AND fk_idusernote = $2;';
        const queryValues = [object.fk_idserie, object.fk_idusernote];

        db.connectionPsql(queryText, queryValues, callback);
    }

// Movie

    module.exports.selectMovie = (idObject, callback) => { // selectMovie

        const queryText = 'SELECT * FROM schema.movie WHERE idMovie = $1;';
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

    module.exports.selectMovieLike = (object, callback) => { // selectMovieLike

        const queryText = 'SELECT * FROM schema.movie_like WHERE fk_idmovie = $1 AND fk_iduserlike = $2;';
        const queryValues = [object.fk_idmovie, object.fk_iduserlike];

        db.connectionPsql(queryText, queryValues, callback);
    }

    module.exports.selectNoteMovie = (object, callback) => { // selectNoteMovie

        const queryText = 'SELECT * FROM schema.movie_note WHERE fk_idmovie = $1 AND fk_idusernote = $2;';
        const queryValues = [object.fk_idmovie, object.fk_idusernote];

        db.connectionPsql(queryText, queryValues, callback);
    }

// comments

module.exports.selectCommentsArticle = (idObject, callback) => { // selectComments

    const queryText = 'SELECT * FROM schema.comment WHERE fk_idarticle = $1;';
    const queryValues = [idObject._id];

    db.connectionPsql(queryText, queryValues, callback);
}

module.exports.selectCommentsSerie = (idObject, callback) => { // selectComments

    const queryText = 'SELECT * FROM schema.comment WHERE fk_idserie = $1;';
    const queryValues = [idObject._id];

    db.connectionPsql(queryText, queryValues, callback);
}

module.exports.selectCommentsMovie = (idObject, callback) => { // selectComments

    const queryText = 'SELECT * FROM schema.comment WHERE fk_idmovie = $1;';
    const queryValues = [idObject._id];

    db.connectionPsql(queryText, queryValues, callback);
}

// Like 

module.exports.searchLikesArticles = (object, callback) => { // searchRessourcesArticles

    const queryText = 'SELECT title, synopsis, img FROM schema.article, schema.article_like WHERE fk_iduserlike = $1 GROUP BY title, synopsis, img;';
    const queryValues = [object.fk_iduserlike];

    db.connectionPsql(queryText, queryValues, callback);
}

module.exports.searchLikesSeries = (object, callback) => { // searchRessourcesSeries

    const queryText = 'SELECT title, synopsis, img FROM schema.serie, schema.serie_like WHERE fk_iduserlike = $1 GROUP BY title, synopsis, img;';
    const queryValues = [object.fk_iduserlike];

    db.connectionPsql(queryText, queryValues, callback);
}

module.exports.searchLikessMovies = (object, callback) => { // searchRessourcesMovies

    const queryText = 'SELECT title, synopsis, img FROM schema.movie, schema.movie_like WHERE fk_iduserlike = $1 GROUP BY title, synopsis, img;';
    const queryValues = [object.fk_iduserlike];

    db.connectionPsql(queryText, queryValues, callback);
}