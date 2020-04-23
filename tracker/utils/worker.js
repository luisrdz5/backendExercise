const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const uuid = require('uuid');

const amqp = require('amqplib/callback_api');
const { config } = require('../config/index');
const redis = require("ioredis");
const client = redis.createClient({ host: config.redisServer });

const worker = () => {
    try{
        console.log(`trying to connect to ... amqp://${config.rabbitmqUser}:${config.rabbitmqPwd}@${config.rabbitmqServer}`);

        client.on("error", function(error) {
        console.error(error);
        });
    
        amqp.connect(`amqp://${config.rabbitmqUser}:${config.rabbitmqPwd}@${config.rabbitmqServer}/`, function(error0, connection) {
            if (error0) {
                console.log(error0);
                return error0;
            }
            connection.createChannel(function(error1, channel) {
                if (error1) {
                    throw error1;
                }
        
                channel.assertQueue(config.rabbitmqQueue, {
                    durable: false
                });
        
                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", config.rabbitmqQueue);
        
                channel.consume(config.rabbitmqQueue, function(msg) {
                    console.log(" [Worker][x] Received %s", msg.content.toString());
                    //client.set(uuid.v1(), msg.content.toString(), redis.print);
                    //client.hset('tweets',uuid.v1(),msg.content.toString());
                    client.rpush('tweets', msg.content.toString());
                }, {
                    noAck: true
                });
            });
        });
    }catch (error){
        console.log(error);
    }

}

setTimeout(worker, 10000);
//setTimeout(worker(),30000);

 


