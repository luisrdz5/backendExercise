const Twitter = require('twitter');
const { config } = require('./config/index.js');
const sender = require('./utils/sender');

const client = new Twitter({
    consumer_key: config.apiKeyTwitter,
    consumer_secret: config.apiSecretKeyTwitter, 
    access_token_key: config.accessTokenTwitter,
    access_token_secret: config.accessTokenSecretTwitter, 
  });

const dispatcher = () => {
  // este archivo obtendra la informacion de twitter
  console.log(`start to track the keywords ${config.keywords}`);
  client.stream(config.streamUrl, {track: config.keywords}, function(stream) {
      stream.on('data', function(event) {
        console.log(event.full_text);
        if(event.full_text){
          sender(event.full_text);
        }else{
          sender(event.text);
        }
      });

      stream.on('error', function(error) {
        throw error;
      });
    });  
}


setTimeout(dispatcher, 15000);


