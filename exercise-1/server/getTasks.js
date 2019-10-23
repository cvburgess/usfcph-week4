require("dotenv").config();
const knex = require("knex");

const { DB_URL } = process.env;
const database = knex({ client: "pg", connection: DB_URL });

exports.handler = async (event, context) => {
  const tasks = await database.select("*").from("task");

  return {
    statusCode: 200,
    body: JSON.stringify({ tasks })
  };
};
