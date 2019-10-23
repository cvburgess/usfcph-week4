const { Pool, Client } = require("pg");

const { DB_URL } = process.env;
const pool = new Pool({ connectionString: DB_URL });

exports.handler = async (event, context) => {
  const title = event.queryStringParameters.title;

  const task = await pool.query("SELECT * FROM task", (err, res) => {
    console.log(err, res);
    pool.end();
    return res;
  });

  return {
    statusCode: 200,
    body: task
  };
};
