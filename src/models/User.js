var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var User = function(user) {
    this.uid = user.uid;
    this.name = user.name;
    this.geoLocId = user.geoLocId;
    this.email = user.email;
}

User.createUser = function(newUser, result) {
    createModel("user", newUser, result);
};

User.getUserById = function(userId, result) {
    sql.query(
        {
            sql: "SELECT * FROM user WHERE uid = ?",
            values: [userId] 
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

User.getAllUsers = function(result) {
    getAllModels("user", result);
};

User.loginUser = function(name, email, result) {
    sql.query(
        {
            sql: "SELECT * FROM user WHERE (name = ? AND email = ?)",
            values: [name, email]
        },
        function (err, res) {
            console.log(res);
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        }
    )
}

module.exports = User;