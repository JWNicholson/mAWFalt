
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class_schedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('class_schedule').insert([
        // {id: 0, instructorid: 2,classid: 1,start_date:2020-05-10, end_date:2020-05-17,start_time:"12:00:", end_time:"13:00"},
        // {id: 1, instructorid: 3,classid:3,start_date:2020-06-12, end_date:2020-06-19,start_time:"8:00", end_time: "9:00"}

        {id: 0, instructorid:2, classid: 0, start_date:'2020-05-10', end_date:'2020-05-17',start_time: '10:00:00', end_time: '11:00:00' },
        {id: 1, instructorid:3, classid:1, start_date:'2020-06-12', end_date:'2020-06-19', start_time: '09:00:00', end_time: '10:00:00'}
     
      ]);
    });
};