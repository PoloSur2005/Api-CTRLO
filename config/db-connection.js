import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Password1',
  database: 'ModaStore',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;

