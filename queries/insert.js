const bcrypt        = require('bcryptjs');

const db	        = require('../middlewares/connection');

// User

module.exports.insertUser = (newUser, callback) =>{

    bcrypt.genSalt(10, (err, salt) => { 

        bcrypt.hash(newUser.password, salt, (err, passwordHashed) => {

            newUser.password = passwordHashed;

            const date 	= new Date();
            const day 	= (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
            const month = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
            newUser.inscriptionDate = day + '/' + month + '/' + date.getFullYear();

            const queryText = 'INSERT INTO schema.user (pseudo, email, password, lastName, firstName, nbStreet, street, city, postalCode, sex, birthDay, inscriptionDate, rgpd) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);';
            const queryValues = [ newUser.pseudo, newUser.email, newUser.password, newUser.lastName, newUser.firstName, newUser.nbStreet, newUser.street, newUser.city, newUser.postalCode, newUser.sex, newUser.birthDay, newUser.inscriptionDate, newUser.rgpd ];

            db.connectionPsql(queryText, queryValues, callback);
        });
    });
}

// Article

module.exports.insertArticle = (newArticle, callback) =>{

    const date  = new Date();
    const day   = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    const month = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
    newArticle.creationDate = day + '/' + month + '/' + date.getFullYear();

    const queryText = 'INSERT INTO schema.article (title, synopsis, content, creationDate, img, fk_idAuteur) VALUES ($1, $2, $3, $4, $5, $6);';
    const queryValues = [ newArticle.title, newArticle.synopsis, newArticle.content, newArticle.creationDate, newArticle.img, newArticle.fk_idAuteur ];

    db.connectionPsql(queryText, queryValues, callback);
}

module.exports.insertArticleLike = (object, callback) => { // selectArticleLike

    const queryText = 'INSERT INTO schema.article_like (fk_idarticle, fk_iduserlike) VALUES ($1, $2);';
    const queryValues = [object.fk_idarticle, object.fk_iduserlike];

    db.connectionPsql(queryText, queryValues, callback);
}

module.exports.insertNoteArticle = (object, callback) => { // insertNoteArticle

    const queryText = 'INSERT INTO schema.article_note ( fk_idArticle, fk_idUsernote, note) VALUES ($1, $2, $3);';
    const queryValues = [object.fk_idarticle, object.fk_idusernote, object.note];

    db.connectionPsql(queryText, queryValues, callback);
}

// Serie

module.exports.insertSerieLike = (object, callback) => { // selectSerieLike

    const queryText = 'INSERT INTO schema.serie_like (fk_idserie, fk_iduserlike) VALUES ($1, $2);';
    const queryValues = [object.fk_idserie, object.fk_iduserlike];

    db.connectionPsql(queryText, queryValues, callback);
}

// Movie

module.exports.insertMovieLike = (object, callback) => { // selectMovieLike

    console.log("In Insert fk_idmovie " + object.fk_idmovie);
    console.log("In Insert fk_iduserlike " + object.fk_iduserlike);

    const queryText = 'INSERT INTO schema.movie_like (fk_idmovie, fk_iduserlike) VALUES ($1, $2);';
    const queryValues = [object.fk_idmovie, object.fk_iduserlike];

    db.connectionPsql(queryText, queryValues, callback);

    // INSERT INTO schema.movie_like (fk_idmovie, fk_iduserlike) VALUES (1, 1);
}

// Comment

module.exports.insertCommentArticle = (newComment, callback) => {

    const queryText = 'INSERT INTO schema.comment (title, content, fk_idAuteur, fk_idArticle) VALUES ($1, $2, $3, $4);';
    const queryValues = [ newComment.title, newComment.content, newComment.idUser, newComment.fk_idArticle ];

    db.connectionPsql(queryText, queryValues, callback);
}


module.exports.insertCommentSerie = (newComment, callback) => {

    const queryText = 'INSERT INTO schema.comment (title, content, fk_idAuteur, fk_idSerie) VALUES ($1, $2, $3, $4);';
    const queryValues = [ newComment.title, newComment.content, newComment.idUser, newComment.fk_idSerie ];

    db.connectionPsql(queryText, queryValues, callback);
}

module.exports.insertCommentMovie = (newComment, callback) => {

    console.log("ISNERT COMMENT FK_MOVIE : " + newComment.fk_idMovie);

    const queryText = 'INSERT INTO schema.comment (title, content, fk_idAuteur, fk_idMovie) VALUES ($1, $2, $3, $4);';
    const queryValues = [ newComment.title, newComment.content, newComment.idUser, newComment.fk_idMovie ];

    db.connectionPsql(queryText, queryValues, callback);
}