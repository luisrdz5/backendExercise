const express = require('express');
const redis = require('redis')  
const client = redis.createClient() 



function keywordsApi(app) {
    const router = express.Router();
    app.use('/api', router);

    router.get('/', (req, res, next) => {
        let return_dataset = [];

        client.keys('*', (err, id) => {
            let multi = client.multi()
            let keys = Object.keys(id)
            let i = 0
        
            keys.forEach( (l) => {
              client.get(id[l], (e, o) => {
                i++
                if (e) {console.log(e)} else {
                  temp_data = {'id':id[l],'data':o}
                  return_dataset.push(temp_data)
                }
        
                if (i == keys.length) {
                  res.send({tweets:return_dataset})
                }
              })
            })
          })
    });
}

module.exports = keywordsApi;