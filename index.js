const { ApolloServer, gql } = require('apollo-server');
const { bookTypeDef, bookResolvers } = require('./src/resources/book');

require('dotenv').config();

const typeDef = gql`
  type Query
`;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [typeDef, bookTypeDef],
  resolvers: [bookResolvers],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
