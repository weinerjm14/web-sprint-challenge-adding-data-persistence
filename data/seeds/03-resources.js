exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('resources').then(function () {
    // Inserts seed entries
    return knex('resources').insert([
      { name: 'desktop', description: 'computer resource' },
      { name: 'tablet' },
      { name: 'phone' },
      { name: 'laptop' },
    ]);
  });
};
