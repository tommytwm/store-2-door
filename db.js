var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "dbuser",
    password: "s3kreee7",
    database: "my_db"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

con.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
    if (err) throw err;
    console.log("The solution is: ", rows[0].solution);
});

con.end();