# Backend Exercise

6th April 2020

## OVERVIEW

Our application will listen to tweets and track certain keywords and those tweets will be available through an API.

## GOALS

Listen to tweets and identify the required keywords
Make an API REST with the tweets.

## SPECIFICATIONS

The keywords we’re going to listen to, are: platzi, open source and node Twitter API (https://developer.twitter.com/en/docs/tweets/filter-realtime/overview) 
In case of a keyword match, the tweet will be sent to a RabbitMQ queue, which will be processed and saved to Redis. We will also have a REST API exposing the tweets we have saved.
