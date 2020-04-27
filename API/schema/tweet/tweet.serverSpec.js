'use strict';

const graphql = require('graphql');
const chai = require('chai');

const tweets = require('./tweetMock.js');

const expect = chai.expect;

describe('Test the GraphQL API', () => {
  it('Should have a data field of type String', () => {
    expect(tweets.getTweets()).to.have.property('data');
    expect(tweets.getTweets().data.type).to.deep.equals(graphql.GraphQLString)
  })
});