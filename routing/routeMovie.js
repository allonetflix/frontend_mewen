const express       = require('express');
const router        = express.Router();

const insertQuery   = require('../queries/insert');
const selectQuery   = require('../queries/select');

router.get('/dataListMovies', (req, res) => { // Get All Movies

	selectQuery.selectMovies((err, listMovieFound) => {     

        if(err) throw err;
        if(!listMovieFound){ return res.json({success: false, msg: "List Movies not found !"}); }

        res.json({
            success: true,
            listMovies: listMovieFound
        });
    });
});



module.exports = router;