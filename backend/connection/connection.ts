import mysql from 'mysql2/promise';
import { PoolOptions } from 'mysql2/typings/mysql';

const conn = mysql.createPool(process.env.DATABASE_URL as PoolOptions)

export default conn;
