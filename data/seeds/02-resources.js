exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {resource_name: 'butter', resource_description: 'making butter'},
    {resource_name: 'butter2222', resource_description: 'making butter22222'},
    {resource_name: 'butter3333', resource_description: 'making butter33333'},
  ]);
};
