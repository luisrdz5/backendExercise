require('dotenv').config();

const config = {
    apiKeyTwitter: process.env.API_KEY_TWITTER,
    apiSecretKeyTwitter: process.env.API_SECRET_KEY_TWITTER,
    accessTokenTwitter: process.env.ACCESS_TOKEN_TWITTER,
    accessTokenSecretTwitter: process.env.ACCESS_TOKEN_SECRET_TWITTER,
    streamUrl: process.env.STREAM_URL,
    keywords: process.env.KEYWORDS,
    rabbitmqUser: process.env.RABBITMQ_USER,
    rabbitmqPwd: process.env.RABBITMQ_PWD,
    rabbitmqServer: process.env.RABBITMQ_SERVER,
    rabbitmqQueue: process.env.RABBITMQ_QUEUE,
    redisServer: process.env.REDIS_SERVER,
}
module.exports = {config}