const bcrypt        = require('bcryptjs');

const db	        = require('../middlewares/connection');


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