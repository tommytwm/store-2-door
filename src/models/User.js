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

User.addUser = function(name, email, geoLocId, result) {
    sql.query(
        {
            sql: "INSERT INTO User(name, email, geoLocId) VALUES(name = ?, email = ?, geoLocId = ?)",
            values: [name, email, geoLocId] 
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
}

User.deleteUser = function(userId, result) {
    sql.query(
        {
            sql: "DELETE FROM user WHERE uid = ?",
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

User.getUserByName = function(name, result) {
    sql.query(
        {
            sql: "SELECT * FROM user WHERE name = ?",
            values: [name] 
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
}

User.getUsersWithReviews = function(result) {
    sql.query(
        {
            sql: " SELECT u.uid FROM Users u, Review r WHERE u.uid = r.uid"
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
}

User.getAllUsers = function(result) {
    getAllModels("user", result);
};

module.exports = User;