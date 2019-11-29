const { gql } = require('apollo-server');

const queries = gql`
  extend type Query {
    books: [Book]
    getBookByISBN(ISBN: String): Book
  }
`;

module.exports = { queries };
