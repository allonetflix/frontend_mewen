const express       = require('express');
const router        = express.Router();
const passport      = require('passport');
const jwt           = require('jsonwebtoken');
const config        = require('../config/configuration');

const userController = require('../controllers/userController');
const commonController = require('../controllers/commonController');
const ensureBodyFields = require('../middlewares/ensureBodyFields');

const insertQuery   = require('../queries/insert');
const selectQuery   = require('../queries/select');
const updateQuery   = require('../queries/update');
const deleteQuery   = require('../queries/delete');


router.post('/register', // Register
	ensureBodyFields.verifyBody(['pseudo', 'email', 'password', 'lastName']), 
	userController.registerUser
	);

router.post('/registerUser', (req, res) => { // Register (for FRONT)

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
        inscriptionDate: null,
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
});

router.post('/authenticate', // Authenticate
	ensureBodyFields.verifyBody(['pseudo', 'password']), 
	commonController.authenticationUser
	);

router.post('/loginUser', (req, res) => { // Login (for FRONT)

    const entPseudo = req.body.pseudo;
    const entPassword = req.body.password;

    selectQuery.selectUserByPseudo(entPseudo, (err, userFound) => { // check if user exists

        if(err) throw err;
        if(!userFound[0]){ return res.json({success: false, msg: "User not found !"}); }

        const hashedPassword = userFound[0].password;
       
        selectQuery.comparePassword(entPassword, userFound[0].password, (err, isMatch) => { // compare password

            if(err) throw err;
            if(isMatch){ 

                const token = jwt.sign(userFound[0], config.secret, { expiresIn: 60 * 60 });
                
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    userData: {
                        id: userFound[0].iduser,
                        pseudo: userFound[0].pseudo,
                        email: userFound[0].email,
                        lastname: userFound[0].lastname
                    }
                });
            }

            else{ return res.json({success: false, msg: "Wrong password"}) }
        });
    });
});

router.get('/dataUser', // Get Data User
	passport.authenticate('jwt', { session: false }), (req, res) => { 
    	res.json({userData: req.user });
		});

router.post('/updateUser', (req, res) => { // Update (for FRONT)

    const updUser = {
        id: req.body.id,
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
        rgpd: req.body.rgpd
    }

    selectQuery.selectUserByPseudo(updUser.pseudo, (err, userFound) => { // check if pseudo exists

        if(err) throw err;
        if(userFound[0]){ return res.json({success: false, msg: "Pseudo utilisateur déjà existant !"}); }

        updateQuery.updateUser(updUser, (err, userUpdated) => { // update updUser

            if(err)
                res.json({success: false, msg: "Echec de l'inscription"});
            else
                res.json({success: true, msg: "Inscription réussie"});
        });  
    });
});

router.post('/nameUser', (req, res) => { // Get One User

    const idObject = {
        _id: req.body._id
    }

    selectQuery.selectUserById(idObject._id, (err, userFound) => {     

        if(err) throw err;
        if(!userFound){ return res.json({success: false, msg: "User not found !"}); }

        res.json({
            success: true,
            user: userFound
        });
    });
});

router.post('/searchRessources', (req, res) => { // Search Ressources

    const object = {
        search: req.body.search + "%",
    }

    console.log("OBJECT IN BACK : " + object.search);

    selectQuery.searchRessourcesArticles(object, (err, articlesFound) => {     

        if(err) throw err;
        
        const articlesFoundObject = articlesFound;

        selectQuery.searchRessourcesSeries(object, (err, seriesFound) => {   

            if(err) throw err;

            const seriesFoundObject = seriesFound;

            selectQuery.searchRessourcesMovies(object, (err, moviesFound) => {     

                if(err) throw err;

                const moviesFoundObject = moviesFound;

                res.json({
                    success: true,
                    articlesFound: articlesFoundObject,
                    seriesFound: seriesFoundObject,
                    moviesFound: moviesFoundObject,
                });
            });
        });
    });

});

router.post('/deleteDataUser', (req, res) => {

    const object = {

        id: req.body.id
    }

    deleteQuery.deleteDataUser(object, (err, userFound) => {     

        if(err) throw err;
        if(!userFound){ return res.json({success: false, msg: "User not found !"}); }

        res.json({ success: true });
    });
});

router.post('/deleteUser', (req, res) => {

    const object = {
        
        id: req.body.id
    }

    deleteQuery.deleteUser(object, (err, userFound) => {     

        if(err) throw err;
        if(!userFound){ return res.json({success: false, msg: "User not found !"}); }

        res.json({ success: true });
    });
});

module.exports = router;