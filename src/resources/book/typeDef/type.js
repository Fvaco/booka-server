const { gql } = require('apollo-server');

const type = gql`
  type Book {
    title: String
    author: String
    ISBN: String
  }
`;

module.exports = { type };
