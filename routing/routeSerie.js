const express       = require('express');
const router        = express.Router();

const insertQuery   = require('../queries/insert');
const selectQuery   = require('../queries/select');

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



module.exports = router;