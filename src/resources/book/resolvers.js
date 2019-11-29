const { books } = require('./fixture');

const bookResolvers = {
  Query: {
    books: () => books,
    getBookByISBN: (_, { ISBN }) => books.find(book => book.ISBN === ISBN),
  },
};

module.exports = { bookResolvers };
