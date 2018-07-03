const express       = require('express');
const router        = express.Router();
const passport      = require('passport');

const userController = require('../controllers/userController');
const commonController = require('../controllers/commonController');
const ensureBodyFields = require('../middlewares/ensureBodyFields');


router.post('/register', // Register
	ensureBodyFields.verifyBody(['pseudo', 'email', 'password', 'lastName']), 
	userController.registerUser
	);

router.post('/authenticate', // Authenticate
	ensureBodyFields.verifyBody(['pseudo', 'password']), 
	commonController.authenticationUser
	);

router.get('/dataUser', // Get Data User
	passport.authenticate('jwt', { session: false }), (req, res) => { 
    	res.json({userData: req.user });
		});

module.exports = router;