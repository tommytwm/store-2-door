var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var AcceptRequest = function(acceptRequest) {
    this.requestId = acceptRequest.requestId;
    this.providerId = acceptRequest.providerId;
    this.isAccepted = acceptRequest.isAccepted;
}

AcceptRequest.createAcceptRequest = function(newAcceptRequest, result) {
    createModel("acceptrequest", newAcceptRequest, result);
};

AcceptRequest.getAcceptRequestById = function(requestId, providerId, result) {
    sql.query(
        {
            sql: "SELECT * FROM acceptrequest WHERE (requestId = ? AND providerId = ?)",
            values: [requestId, providerId] 
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

AcceptRequest.deleteAcceptedRequest = function(requestId, providerId, result) {
    sql.query(
        {
            sql: "DELETE FROM acceptrequest WHERE (requestId = ? AND providerId = ?)",
            values: [requestId, providerId] 
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

AcceptRequest.getAllAcceptRequests = function(result) {
    getAllModels("acceptrequest", result);
};

module.exports = AcceptRequest;