import { Pool } from 'pg';

const pool = new Pool({
  user: 'eugeneburlak',
  password: 'root',
  host: 'localhost',
  port: 5433,
  database: 'auth',
});

export default pool;
