
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_role').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_role').insert([
        {id: 0, userid: 0,roleid:0},
        {id: 1, userid: 1,roleid:0},
        {id: 2, userid: 2,roleid:1},
        {id: 3, userid: 3,roleid:1}
      ]);
    });
};
