const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const amqp = require('amqplib/callback_api');
const { config } = require('../config/index.js');

function sendTask(msg){
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
            const result= channel.sendToQueue(config.rabbitmqQueue, Buffer.from(msg), {persistent: true});
            setTimeout(function () {
                channel.connection.close();
            }, 500);
            console.log(" [x] Sent %s", msg);

        });
    });
}
//sendTask('prueba funcional');
module.exports = sendTask;
