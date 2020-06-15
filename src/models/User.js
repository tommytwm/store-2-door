const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
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
    getModelById("user", userId, result);
};

User.getAllUsers = function(result) {
    getAllModels("user", result);
};

module.exports = User;