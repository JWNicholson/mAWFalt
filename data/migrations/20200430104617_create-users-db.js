
exports.up = function(knex) {
    return knex.schema
  
    // users table
    .createTable('users', users => {
      users
        .increments('id');
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users
        .string('password',255)
        .notNullable();
      users
        .string('fname', 255);
      users
        .string('lname', 255);
      users
        .string('email', 255)
        .notNullable()
        .unique();
    })
  
    .createTable('role',role => {
        role.increments('id');
        role
          .string('title')
          .notNullable()
          .unique();
      })
    .createTable('classes', classes => {
        classes
        .increments('id');
        classes
          .string('classname')
          .unsigned()
          .notNullable()
          .unique();
        classes
          .integer('intensity')
          .unsigned()
          .notNullable();
      })

      .createTable('class_schedule', class_schedule => {
        class_schedule
            .increments('id');
        class_schedule
            .integer('instructorid')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        class_schedule
            .integer('classid')
            .unsigned()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        class_schedule
          .date('start_date');
        class_schedule
          .date('end_date');
        class_schedule
          .time('start_time');
        class_schedule
          .time('end_time');
        })
     
  .createTable('user_role',user_role =>{
    user_role.increments('id');
     user_role
      .integer('userid')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
     user_role
      .integer('roleid')
      .unsigned()
      .references('id')
      .inTable('role')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
       })

    .createTable('class_user',class_user => {
      class_user.increments('id');
        class_user
          .integer('classid')
          .unsigned()
          .references('id')
          .inTable('classes')
          .onDelete('cascade')
          .onUpdate('CASCADE');
        class_user
          .integer('userid')
          .unsigned()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })

  .createTable('user_registration', user_registration => {

    user_registration.increments('id');

        user_registration
          .integer('userid')
          .unsigned()
          .references('id')
          .inTable('users')
          .onDelete('cascade')
          .onUpdate('CASCADE');
        user_registration
          .integer('scheduleid')
          .unsigned()
          .references('id')
          .inTable('class_schedule')
          .onDelete('cascade')
          .onUpdate('CASCADE');
      })
    
  };

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('user_registration')
    .dropTableIfExists('class_user')
    .dropTableIfExists('user_role')
    .dropTableIfExists('class_schedule')
    .dropTableIfExists('classes')
    .dropTableIfExists('role');
};
