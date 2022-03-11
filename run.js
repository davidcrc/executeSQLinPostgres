const { pool } = require("./connect");
const fs = require('fs')




async function runInDB() {

  const files = process.argv.slice(2);

  files.forEach(async (file) => {
    let query = fs.readFileSync(`./${file}`, 'utf8')

    try {
      const res = await pool.query(query);
      console.log(res.rows);

    } catch (err) {
      console.log(err.stack);

    }
  })

  pool.end();


}

runInDB()
