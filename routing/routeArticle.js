const express       = require('express');
const router        = express.Router();

const insertQuery   = require('../queries/insert');
const selectQuery   = require('../queries/select');

const articleController = require('../controllers/articleController');


router.get('/dataArticles', // Get All Articles
    articleController.getDataArticles
);

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
            listArticles: listArticleFound
        });
    });
});

module.exports = router;