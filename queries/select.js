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