const dotenv = require("dotenv");

dotenv.config();

const { DB_URI, DB_NAME } = process.env;

module.exports = { DB_URI, DB_NAME };
