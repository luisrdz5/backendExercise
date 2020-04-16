const express = require('express');



function keywordsApi(app) {
    const router = express.Router();
    app.use('/api', router);

    router.get('/', async function(req, res, next) {
        res.send(`API auth v 0.01`);
    });
}

module.exports = keywordsApi;