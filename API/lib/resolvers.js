'use strict'

const redis = require('ioredis') 
const { config } = require('../config/index.js'); 
//const client = new redis({ host: config.redisServer });
const client = new redis();

module.exports = {
    Query: {
        getTweets: async () => {
            try {
                const tweets = (await client.lrange('tweets', 0, -1)).map(item => {
                    return ({"data": item});
                    });
                return tweets;
            }catch (error){
                console.log(error);
            }
        }
    }
}

