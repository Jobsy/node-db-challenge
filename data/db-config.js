
const knex = require("knex");

const config = require("../data/db-config");

module.exports = knex(config[process.env.NODE_ENV])