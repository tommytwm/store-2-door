var sql = require('../controllers/databaseController');

var Example = function(example) {
    this.status = example.status;
}

Example.createExample = function(newExample, result) {
    sql.query("INSERT INTO examples set ?", newExample, function (err, res) {
                
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Example.getExampleById = function(exampleId, result) {
    sql.query("SELECT example from examples where id = ? ", exampleId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
      
        }
    });   
};

Example.getAllExamples = function(result) {
    sql.query("SELECT * from heroku_622e1f339f8e277.admin", function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(JSON.stringify(res)+"got it")
            result(null, res);
      
        }
    });   
};
Example.getAllUsers = function (result) {
    sql.query("SELECT * from heroku_622e1f339f8e277.user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(JSON.stringify(res) + "got it")
            result(null, res);

        }
    });
};

module.exports = Example;