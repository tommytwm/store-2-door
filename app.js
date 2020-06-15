var express = require('express');
var app = express();

const bodyParser = require("body-parser");
const routes = require('./src/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(3000, function() {
    console.log("Server listening on port 3000!")
});
