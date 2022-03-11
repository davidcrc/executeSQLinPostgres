## Execute sql script in postgres DB

## Execute

```bash
node run.js script.sql
```

### Example 1

```js
const query = " select * from table ";
try {
  const res = await pool.query(query);
  console.log(res.rows);
} catch (err) {
  console.log(err.stack);
}
```

### Example 2: to pas data

```sql
const [id, name] = process.argv.slice(2);
  try {
    const res = await pool.query("UPDATE table SET name = $1 WHERE id = $2", [
      name,
      id,
    ]);
    console.log(`Updated db with name ${name}`);
  } catch (error) {
    console.error(error);
  }
```
