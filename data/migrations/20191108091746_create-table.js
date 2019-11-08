
exports.up = function (knex) {
    return knex.schema
        .createTable("projects", table => {
            table.increments()
            table.string("project_name", 128)
                .unique()
                .notNullable()
        })
        .createTable("resources", table => {
            table.increments()
            table.string("resource_name", 128)
                .notNullable()
        })
        .createTable("tasks", table => {
            table.increments()
            table.string("task_name", 128)
            table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
            // .onUpdate("CASCADE")
            // .onDelete("CASCADE")
            table.integer("resource_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("resources")
                // .onUpdate("CASCADE")
                // .onDelete("CASCADE")
            // table.primary(["recipe_id", "ingredient_id"])
        })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExits("projects")
    .dropTableIfExits("resources")
    .dropTableIfExits("tasks")
};
