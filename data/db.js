const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findResources,
    findById,
    findResourceById,
    insert,
    // update,
    // remove,
  };
  
  function find() {
    return db("projects");
  }

  function findResources() {
    return db("resources");
  }

  function findById(id) {
    return db("projects").where({ id: Number(id) });
  }

  function findResourceById(id) {
    return db("resources").where({ id: Number(id) });
  }

  function insert(car) {
    return db("projects")
      .insert(car)
      .then(ids => ({ id: ids[0] }));
  }
