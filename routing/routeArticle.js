const express       = require('express');
const router        = express.Router();

const insertQuery   = require('../queries/insert');
const selectQuery   = require('../queries/select');
const updateQuery   = require('../queries/update');
const deleteQuery   = require('../queries/delete');

const articleController = require('../controllers/articleController');


router.get('/dataArticles', // Get All Articles
    articleController.getDataArticles
);

router.post('/dataArticle', (req, res) => { // Get One Article

    const idObject = {
        _id: req.body._id
    }

    selectQuery.selectArticle(idObject, (err, ArticleFound) => {

        if(err) throw err;
        if(!ArticleFound){ return res.json({success: false, msg: "Article not found !"}); }

        res.json({
            success: true,
            article: ArticleFound
        });
    });
});

router.get('/dataListArticles', (req, res) => { // Get All Articles

	selectQuery.selectArticles((err, listArticleFound) => {     

        if(err) throw err;
        if(!listArticleFound){ return res.json({success: false, msg: "List Articles not found !"}); }

        res.json({
            success: true,
            listArticles: listArticleFound
        });
    });
});

router.get('/dataListArticlesByDate', (req, res) => { // Get All Articles Sorted by Date

	selectQuery.selectArticlesByDate((err, listArticleFound) => {     

        if(err) throw err;
        if(!listArticleFound){ return res.json({success: false, msg: "List Articles not found !"}); }

        res.json({
            success: true,
            listArticlesByDate: listArticleFound
        });
    });
});

router.get('/dataListArticlesByNote', (req, res) => { // Get All Articles Sorted by Note

    selectQuery.selectArticlesByNote((err, listArticleFound) => {     

        if(err) throw err;
        if(!listArticleFound){ return res.json({success: false, msg: "List Articles not found !"}); }

        res.json({
            success: true,
            listArticlesByNote: listArticleFound
        });
    });
});

router.get('/dataListArticlesBySoon', (req, res) => { // Get All Articles Sorted by Soon

    selectQuery.selectArticlesBySoon((err, listArticleFound) => {     

        if(err) throw err;
        if(!listArticleFound){ return res.json({success: false, msg: "List Articles not found !"}); }

        res.json({
            success: true,
            listArticlesBySoon: listArticleFound
        });
    });
});

router.post('/addArticle', (req, res) => { // Add article (for FRONT)

    const newArticle = {
        title: req.body.title,
        synopsis: req.body.synopsis,
        content: req.body.content,
        img: req.body.img,
        creationDate: null,
        fk_idAuteur: req.body.idUser,
    }

    insertQuery.insertArticle(newArticle, (err, userAdded) => { // insert newArticle

        if(err)
            res.json({success: false, msg: "Echec de l'ajout de l'article"});
        else
            res.json({success: true, msg: "Ajout réussi"});
    });  
});

// Like

router.post('/selectLikeArticle', (req, res) => { // likeArticle (for FRONT)

    const object = {
        fk_idarticle: req.body.fk_idarticle,
        fk_iduserlike: req.body.fk_iduserlike
    }
    
    selectQuery.selectArticleLike(object, (err, returnObject) => { 

        if(err) throw err;
        if(!returnObject || returnObject[0] == undefined){ return res.json({success: false, msg: "Article liked introuvable !"}); }

        res.json({
            success: true,
            articleLiked: returnObject
        });
    });  
});

router.post('/deleteLikeArticle', (req, res) => { // likeArticle (for FRONT)

    const object = {
        fk_idarticle: req.body.fk_idarticle,
        fk_iduserlike: req.body.fk_iduserlike
    }

    deleteQuery.deleteLikeArticle(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Ressource non supprimée"});
        else
            res.json({success: true, msg: "Ressource supprimée"});
    });  
});

router.post('/insertLikeArticle', (req, res) => { // likeArticle (for FRONT)

    const object = {
        fk_idarticle: req.body.fk_idarticle,
        fk_iduserlike: req.body.fk_iduserlike
    }

    insertQuery.insertArticleLike(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Ressource non insérée"});
        else
            res.json({success: true, msg: "Ressource insérée"});
    });  
});

// NOTE

router.post('/selectNoteArticle', (req, res) => { // noteArticle (for FRONT)

    const object = {
        fk_idarticle: req.body.fk_idarticle,
        fk_idusernote: req.body.fk_idusernote
    }
    
    selectQuery.selectNoteArticle(object, (err, returnObject) => { 

        if(err) throw err;
        if(!returnObject || returnObject[0] == undefined){ return res.json({success: false, msg: "Article noted introuvable !"}); }

        res.json({
            success: true,
            articlenoted: returnObject
        });
    });  
});

router.post('/updateNoteArticle', (req, res) => {

    const object = {

        id: req.body.id,
        note: req.body.note
    }

    updateQuery.updateNoteArticle(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Note non mise à jour "});
        else
            res.json({success: true, msg: "Note mise à jour"});
    });  
});

router.post('/insertNoteArticle', (req, res) => {

    const object = {

        fk_idarticle: req.body.fk_idarticle,
        fk_idusernote: req.body.fk_idusernote,
        note: req.body.note
    }

    insertQuery.insertNoteArticle(object, (err, returnObject) => { 

        if(err)
            res.json({success: false, msg: "Ressource non insérée"});
        else
            res.json({success: true, msg: "Ressource insérée"});
    });  
});

module.exports = router;