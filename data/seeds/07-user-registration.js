
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_registration').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_registration').insert([
        {id: 0, userid:1, scheduleid:0},
        {id: 1, userid:2,scheduleid:1}
      ]);
    });
};