const express =  require('express');
const app = express();

const { config } = require('./config/index.js');
const keywordsApi = require('./routes/keywordsAPI');

keywordsApi(app);

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});