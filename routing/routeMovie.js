const express       = require('express');
const router        = express.Router();

const insertQuery   = require('../queries/insert');
const selectQuery   = require('../queries/select');
const updateQuery   = require('../queries/update');
const deleteQuery   = require('../queries/delete');

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

router.post('/dataMovie', (req, res) => { // Get One Movie

    const idObject = {
        _id: req.body._id
    }

    selectQuery.selectMovie(idObject, (err, MovieFound) => {     

        if(err) throw err;
        if(!MovieFound){ return res.json({success: false, msg: "Movie not found !"}); }

        res.json({
            success: true,
            movie: MovieFound
        });
    });
});

router.get('/dataListMoviesByDate', (req, res) => { // Get All Movies Sorted by Date

    selectQuery.selectMoviesByDate((err, listMoviesFound) => {     

        if(err) throw err;
        if(!listMoviesFound){ return res.json({success: false, msg: "List Movies not found !"}); }

        res.json({
            success: true,
            listMoviesByDate: listMoviesFound
        });
    });
});

router.get('/dataListMoviesByNote', (req, res) => { // Get All Movies Sorted by Note

    selectQuery.selectMoviesByNote((err, listMoviesFound) => {     

        if(err) throw err;
        if(!listMoviesFound){ return res.json({success: false, msg: "List Movies not found !"}); }

        res.json({
            success: true,
            listMoviesByNote: listMoviesFound
        });
    });
});

router.get('/dataListMoviesBySoon', (req, res) => { // Get All Movies Sorted by Soon

    selectQuery.selectMoviesBySoon((err, listMoviesFound) => {     

        if(err) throw err;
        if(!listMoviesFound){ return res.json({success: false, msg: "List Movies not found !"}); }

        res.json({
            success: true,
            listMoviesBySoon: listMoviesFound
        });
    });
});

// Like

router.post('/selectLikeMovie', (req, res) => { // likeMovie (for FRONT)

    const object = {
        fk_idmovie: req.body.fk_idmovie,
        fk_iduserlike: req.body.fk_iduserlike
    }
    
    selectQuery.selectMovieLike(object, (err, returnObject) => { 

        if(err) throw err;
        if(!returnObject || returnObject[0] == undefined){ return res.json({success: false, msg: "Movie liked introuvable !"}); }

        res.json({
            success: true,
            movieLiked: returnObject
        });
    });  
});

router.post('/deleteLikeMovie', (req, res) => { // likeMovie (for FRONT)

    const object = {
        fk_idmovie: req.body.fk_idmovie,
        fk_iduserlike: req.body.fk_iduserlike
    }

    deleteQuery.deleteLikeMovie(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Ressource non supprimée"});
        else
            res.json({success: true, msg: "Ressource supprimée"});
    });  
});

router.post('/insertLikeMovie', (req, res) => { // likeMovie (for FRONT)

    const object = {
        fk_idmovie: req.body.fk_idmovie,
        fk_iduserlike: req.body.fk_iduserlike
    }

    // console.log("In Back fk_idmovie " + object.fk_idmovie);
    // console.log("In Back fk_iduserlike " + object.fk_iduserlike);

    insertQuery.insertMovieLike(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Ressource non insérée"});
        else
            res.json({success: true, msg: "Ressource insérée"});
    });  
});


// NOTE

router.post('/selectNoteMovie', (req, res) => { // noteMovie (for FRONT)

    const object = {
        fk_idmovie: req.body.fk_idmovie,
        fk_idusernote: req.body.fk_idusernote
    }
    
    selectQuery.selectNoteMovie(object, (err, returnObject) => { 

        if(err) throw err;
        if(!returnObject || returnObject[0] == undefined){ return res.json({success: false, msg: "Movie noted introuvable !"}); }

        res.json({
            success: true,
            movienoted: returnObject
        });
    });  
});

router.post('/updateNoteMovie', (req, res) => {

    const object = {

        id: req.body.id,
        note: req.body.note
    }

    updateQuery.updateNoteMovie(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Note non mise à jour "});
        else
            res.json({success: true, msg: "Note mise à jour"});
    });  
});

router.post('/insertNoteMovie', (req, res) => {

    const object = {

        fk_idmovie: req.body.fk_idmovie,
        fk_idusernote: req.body.fk_idusernote,
        note: req.body.note
    }

    insertQuery.insertNoteMovie(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Ressource non insérée"});
        else
            res.json({success: true, msg: "Ressource insérée"});
    });  
});

module.exports = router;