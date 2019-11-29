const { ApolloServer, gql } = require('apollo-server');
const { bookTypeDef, bookResolvers } = require('./src/resources/book');

require('dotenv').config();

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, bookTypeDef],
  resolvers: [bookResolvers],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
