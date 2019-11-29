const process = require('process');

const API_KEY = process.env.GOODREADS_API_KEY;
const SECRET = process.env.GOODREADS_API_SECRET;

module.exports = { API_KEY, SECRET };
