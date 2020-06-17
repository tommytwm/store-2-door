var express = require('express');
var app = express();

const bodyParser = require("body-parser");
const routes = require('./src/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

//const port = 5000;

//app.listen(port, () => `Server running on port ${port}`);

var server = app.listen(process.env.PORT || 5000, function() {
    console.log('Server listening on port ' + server.address().port);
});

