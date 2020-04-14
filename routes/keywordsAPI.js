const express = require('express');



function keywordsApi(app) {
    const router = express.Router();
    app.use('/api', router);

    router.post('/', async function(req, res, next) {
        
    });
}

module.exports = keywordsApi;