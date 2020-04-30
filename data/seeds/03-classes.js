
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {id: 0, classname: 'Yoga', intensity:4},
        {id: 1, classname: 'Swim', intensity: 5},
        {id: 2, classname: 'Cycle', intensity:6},
        {id: 3, classname: 'Kickboxing', intensity:10}
      ]);
    });
};