exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tasks').then(function () {
    // Inserts seed entries
    return knex('tasks').insert([
      {
        project_id: 1,
        discription: 'task1 project1',
        notes: 'notes t1 p1',
        isDone: true,
      },
      { project_id: 1, discription: 'task2 project1' },
      { project_id: 2, discription: 'task1 project2' },
      { project_id: 2, discription: 'task2 project2' },
    ]);
  });
};
