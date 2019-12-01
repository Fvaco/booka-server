const { ApolloServer, gql } = require('apollo-server-lambda');
const { bookTypeDef, bookResolvers } = require('../resources/book');

require('dotenv').config();

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, bookTypeDef],
  resolvers: [bookResolvers],
});

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
console.log(server);
exports.handler = server.createHandler();
