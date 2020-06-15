var sql = require('../controllers/databaseController');

exports.createModel = function(tableName, newModel, result) {
    sql.query(
        {
            sql: "INSERT INTO ?? SET ?",
            values: [tableName, newModel] 
        },
        function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res.insertId);
            }
        }
    );
};

exports.getModelById = function(tableName, modelId, result) {
    sql.query(
        {
            sql: "SELECT * FROM ?? WHERE id = ?",
            values: [tableName, modelId] 
        },
        function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        }
    ); 
};

exports.getAllModels = function(tableName, result) {
    sql.query(
        {
            sql: "SELECT * FROM ??",
            values: [tableName]
        },
        function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        }
    ); 
};