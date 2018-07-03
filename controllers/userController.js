const insertQuery   = require('../queries/insert');
const selectQuery   = require('../queries/select');


module.exports.registerUser = (req, res) => {

	const newUser = {
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: req.body.password,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        nbStreet: req.body.nbStreet,
        street: req.body.street,
        city: req.body.city,
        postalCode: req.body.postalCode, 
        sex: req.body.sex, 
        birthDay: req.body.birthDay, 
        inscriptionDate: req.body.inscriptionDate,
        rgpd: req.body.rgpd
    }

	selectQuery.selectUserByPseudo(newUser.pseudo, (err, userFound) => { // check if pseudo exists

        if(err) throw err;
        if(userFound[0]){ return res.json({success: false, msg: "Pseudo utilisateur déjà existant !"}); }

        insertQuery.insertUser(newUser, (err, userAdded) => { // insert newUser

            if(err)
                res.json({success: false, msg: "Echec de l'inscription"});
            else
                res.json({success: true, msg: "Inscription réussie"});
        });  
    });
}