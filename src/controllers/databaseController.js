const mysql = require("mysql");
const databaseConfig = require("../config/databaseConfig.js");

var connection = mysql.createPool({
  host: databaseConfig.HOST,
  user: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.DB
});

connection.getConnection(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;