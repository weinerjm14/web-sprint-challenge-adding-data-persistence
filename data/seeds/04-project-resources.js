exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('project_resources').then(function () {
    // Inserts seed entries
    return knex('project_resources').insert([
      { project_id: '1', resource_id: '4' },
      { project_id: '1', resource_id: '2' },
      { project_id: '1', resource_id: '3' },
      { project_id: '2', resource_id: '4' },
      { project_id: '2', resource_id: '1' },
    ]);
  });
};
