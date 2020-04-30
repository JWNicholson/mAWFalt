
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('class_user').insert([
        {id: 0, classid: 1,userid:0},
        {id: 1, classid: 2, userid:1}
      ]);
    });
};
