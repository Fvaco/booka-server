const { concatenateTypeDefs } = require('apollo-server');

const { queries } = require('./queries');
const { type } = require('./type');

const bookTypeDef = concatenateTypeDefs([queries, type]);

module.exports = {
  bookTypeDef,
};
