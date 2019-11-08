exports.seed = function(knex) {
      return knex('projects').insert([
        {project_name: 'cake', project_description: 'making cake', complete: 'false'},
        {project_name: 'cake2222', project_description: 'making cake22222', complete: 'false'},
        {project_name: 'cake3333', project_description: 'making cake33333', complete: 'false'},
      ]);
};
