exports.seed = function(knex) {
  return knex('tasks').insert([
    {task_name: 'butter', task_description: 'making butter', task_info: "", complete: "false", project_id: 3, resource_id: 3},
    {task_name: 'butter2222', task_description: 'making butter22222', task_info: "", complete: "false", project_id: 2, resource_id: 2},
    {task_name: 'butter3333', task_description: 'making butter33333', task_info: "", complete: "false", project_id: 1, resource_id: 1},
  ]);
};
