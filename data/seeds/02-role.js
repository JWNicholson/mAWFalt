
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
      {id: 0, title:"client"},
      {id: 1, title: "instructor"}
      ]);
    });
};

