const knex = require("knex");

const { DB_URL } = process.env;
console.log(DB_URL);
const database = knex({ client: "pg", connection: DB_URL });

exports.handler = async (event, context) => {
  const title = event.queryStringParameters.title;

  const task = await database.select('*').from('task');

  return {
    statusCode: 200,
    body: task
  };
};
