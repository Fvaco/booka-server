const { server } = require('./src/lambda/graphql');

server.listen().then(({ url }) => {
  console.log(`🚀  Local server rerver ready at ${url}`);
});
