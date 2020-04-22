'use strict'

const tweets = [
    {
      "id": "07773970-84c1-11ea-9c5f-799256629c85",
      "data": "@alicegoldfuss I’ve got a direct hire role for a great client in Beaverton, OR. Looking for full stack JavaScript (… https://t.co/pujuyPI2zG"
    },
    {
      "id": "07ba8400-84c1-11ea-9c5f-799256629c85",
      "data": "RT @asifrazzaq1988: PyCaret: An open source low-code machine learning library in Python \n\nhttps://t.co/KWBOhd5I86 \n\n#MachineLearning #DeepL…"
    }
  ];


module.exports = {
    Query: {
        getTweets: () => {
            return tweets
          },
        getTweet: (root, args) => {
            const tweet = tweets.filter(course => tweets.id === args.id)
            return tweet.pop()
        }
    }

}
