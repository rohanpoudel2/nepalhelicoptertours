const mysql = require('mysql')
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "NHT",
  port: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

module.exports = db;