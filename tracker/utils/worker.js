const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const uuid = require('uuid');

const amqp = require('amqplib/callback_api');
const { config } = require('../config/index');
const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
    console.error(error);
  });



amqp.connect(`amqp://${config.rabbitmqUser}:${config.rabbitmqPwd}@${config.rabbitmqServer}/`, function(error0, connection) {
    if (error0) {
        throw error0;
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
            console.log(" [x] Received %s", msg.content.toString());
            client.set(uuid.v1(), msg.content.toString(), redis.print);
        }, {
            noAck: true
        });
    });
});