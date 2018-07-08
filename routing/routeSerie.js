const express       = require('express');
const router        = express.Router();

const insertQuery   = require('../queries/insert');
const selectQuery   = require('../queries/select');
const updateQuery   = require('../queries/update');
const deleteQuery   = require('../queries/delete');

router.get('/dataListSeries', (req, res) => { // Get All Series

	selectQuery.selectSeries((err, listSerieFound) => {     

        if(err) throw err;
        if(!listSerieFound){ return res.json({success: false, msg: "List Series not found !"}); }

        res.json({
            success: true,
            listSeries: listSerieFound
        });
    });
});

router.post('/dataSerie', (req, res) => { // Get One Serie

    const idObject = {
        _id: req.body._id
    }

    selectQuery.selectSerie(idObject, (err, SerieFound) => {     

        if(err) throw err;
        if(!SerieFound){ return res.json({success: false, msg: "Serie not found !"}); }

        res.json({
            success: true,
            serie: SerieFound
        });
    });
});

router.get('/dataListSeriesByDate', (req, res) => { // Get All Series Sorted by Date

    selectQuery.selectSeriesByDate((err, listSeriesFound) => {     

        if(err) throw err;
        if(!listSeriesFound){ return res.json({success: false, msg: "List Series not found !"}); }

        res.json({
            success: true,
            listSeriesByDate: listSeriesFound
        });
    });
});

router.get('/dataListSeriesByNote', (req, res) => { // Get All Series Sorted by Note

    selectQuery.selectSeriesByNote((err, listSeriesFound) => {     

        if(err) throw err;
        if(!listSeriesFound){ return res.json({success: false, msg: "List Series not found !"}); }

        res.json({
            success: true,
            listSeriesByNote: listSeriesFound
        });
    });
});

// Like

router.post('/selectLikeSerie', (req, res) => { // likeSerie (for FRONT)

    const object = {
        fk_idserie: req.body.fk_idserie,
        fk_iduserlike: req.body.fk_iduserlike
    }
    
    selectQuery.selectSerieLike(object, (err, returnObject) => { 

        if(err) throw err;
        if(!returnObject || returnObject[0] == undefined){ return res.json({success: false, msg: "Serie liked introuvable !"}); }

        res.json({
            success: true,
            serieLiked: returnObject
        });
    });  
});

router.post('/deleteLikeSerie', (req, res) => { // likeSerie (for FRONT)

    const object = {
        fk_idserie: req.body.fk_idserie,
        fk_iduserlike: req.body.fk_iduserlike
    }

    deleteQuery.deleteLikeSerie(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Ressource non supprimée"});
        else
            res.json({success: true, msg: "Ressource supprimée"});
    });  
});

router.post('/insertLikeSerie', (req, res) => { // likeSerie (for FRONT)

    const object = {
        fk_idserie: req.body.fk_idserie,
        fk_iduserlike: req.body.fk_iduserlike
    }

    insertQuery.insertSerieLike(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Ressource non insérée"});
        else
            res.json({success: true, msg: "Ressource insérée"});
    });  
});


// NOTE

router.post('/selectNoteSerie', (req, res) => { // noteSerie (for FRONT)

    const object = {
        fk_idserie: req.body.fk_idserie,
        fk_idusernote: req.body.fk_idusernote
    }
    
    selectQuery.selectNoteSerie(object, (err, returnObject) => { 

        if(err) throw err;
        if(!returnObject || returnObject[0] == undefined){ return res.json({success: false, msg: "Serie noted introuvable !"}); }

        res.json({
            success: true,
            serienoted: returnObject
        });
    });  
});

router.post('/updateNoteSerie', (req, res) => {

    const object = {

        id: req.body.id,
        note: req.body.note
    }

    updateQuery.updateNoteSerie(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Note non mise à jour "});
        else
            res.json({success: true, msg: "Note mise à jour"});
    });  
});

router.post('/insertNoteSerie', (req, res) => {

    const object = {

        fk_idserie: req.body.fk_idserie,
        fk_idusernote: req.body.fk_idusernote,
        note: req.body.note
    }

    insertQuery.insertNoteSerie(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Ressource non insérée"});
        else
            res.json({success: true, msg: "Ressource insérée"});
    });  
});

module.exports = router;