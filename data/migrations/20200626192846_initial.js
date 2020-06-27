exports.up = async function (knex) {
  await knex.schema
    .createTable('project', tbl => {
      tbl.increments(),
        tbl.text('name').notNullable(),
        tbl.text('description'),
        tbl.boolean('isDone').defaultTo(false);
    })
    .createTable('tasks', tbl => {
      tbl.increments(),
        tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          // this table must exist already
          .inTable('project')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      tbl.text('discription').notNullable(),
        tbl.text('notes'),
        tbl.boolean('isDone').defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments(), tbl.text('name').notNullable(), tbl.text('description');
    })
    .createTable('project_resources', tbl => {
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.primary(['project_id', 'resource_id']);
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('project_resources');
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('project');
};
