const teamMembers = require("./team-members.json");

(async () => {
  const knex = require('knex')({
    client: 'pg',
    version: '13.3',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'confidant',
      database : 'postgres'
    }
  });
  console.log('connected');

  await knex.schema.dropTable('users')
  console.log('user table dropped');

  await knex.schema
    .createTable('users', table => {
      table.increments('id');
      table.string('user_name');
      table.string('img_path');
      table.string('user_role');
      table.string('user_fact');
  })
  console.log('table created');

  const insertedRows = await knex('users').insert(teamMembers)
  console.log('Tim added');

  const users = await knex('users').select('users.user_name as user');
  console.log(users);
})()