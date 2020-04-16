require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
    port: process.env.PORT || 3000,

}
module.exports = {config}