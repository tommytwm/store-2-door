var express = require('express');
var app = express();

const bodyParser = require("body-parser");
const routes = require('./src/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server listening on port ' + server.address().port);
});
