exports.seed = async function (knex) {
  await knex('project').then(function () {
    // Inserts seed entries
    return knex('project').insert([
      { name: 'project 1', description: 'description p1', isDone: true },
      { name: 'project 2', description: 'description p2' },
    ]);
  });
};
