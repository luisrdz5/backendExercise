require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
    port: process.env.PORT || 3000,
    redisServer: process.env.REDIS_SERVER,
    apiKeyTwitter: process.env.API_KEY_TWITTER,
    apiSecretKeyTwitter: process.env.API_SECRET_KEY_TWITTER,
    accessTokenTwitter: process.env.ACCESS_TOKEN_TWITTER,
    accessTokenSecretTwitter: process.env.ACCESS_TOKEN_SECRET_TWITTER,
    streamUrl: process.env.STREAM_URL,
    keywords: process.env.KEYWORDS,
}
module.exports = {config}