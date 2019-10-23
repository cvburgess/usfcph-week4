require("dotenv").config();
const knex = require("knex");

const { DB_URL } = process.env;
const database = knex({ client: "pg", connection: DB_URL });

exports.handler = async (event, context) => {
  const { title, description } = event.queryStringParameters;

  const task = await database
    .insert({ title })
    .into("task")
    .returning("*");

  return {
    statusCode: 200,
    body: JSON.stringify(task)
  };
};
