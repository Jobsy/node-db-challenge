const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findById,
    // insert,
    // update,
    // remove,
  };
  
  function find() {
    return db("projects");
  }

  function findById(id) {
    return db("projects").where({ id: Number(id) });
  }
