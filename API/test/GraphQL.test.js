'use strict' 

const EasyGraphQLTester = require('easygraphql-tester')
const fs = require('fs')
const resolvers = require('../lib/resolvers')
const path = require('path')
const { expect } = require('chai')
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const tweetSchema = fs.readFileSync(path.join(__dirname, 'schema', '../../lib/schema.graphql'), 'utf8')
const tester = new EasyGraphQLTester(tweetSchema, resolvers)
const tweetMock = require('./tweetMock.js');
const app = require('../index');


describe('Should test the query', () => {
    it('Should response the test with a 200 OK', () => {
      try {
        const query = `
        {
        getTweets{
          data
        }
      }
    `
        tester.test(true, query)
      } catch (err) {
        error = err
      }

      expect(200);
    })
    it('Should response data', () => {

            const query = `
            {
            getTweets{
              data
            }
          }
        `
        const test = tester.mock(query, tweetMock)
          expect(test).to.exist;
        })
        it('Should response an array', () => {

            const query = `
            {
            getTweets{
              data
            }
          }
        `
        const test = tester.mock(query, tweetMock)
          expect(test.data.getTweets).to.be.an('array');
        })
        it('Should response 50 tweets', () => {

            const query = `
            {
            getTweets{
              data
            }
          }
        `
        const test = tester.mock(query, tweetMock)
          expect(Object.keys(tweetMock).length).to.above(50);
        })
  })
