const express       = require('express');
const router        = express.Router();

const insertQuery   = require('../queries/insert');
const selectQuery   = require('../queries/select');

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

module.exports = router;