'use strict' 

const EasyGraphQLTester = require('easygraphql-tester')
const fs = require('fs')
const resolvers = require('../lib/resolvers')
const path = require('path')
const { expect } = require('chai')

const tweetSchema = fs.readFileSync(path.join(__dirname, 'schema', '../../lib/schema.graphql'), 'utf8')

const tester = new EasyGraphQLTester(tweetSchema, resolvers)



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
  })
