var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var index = require('./routes/index.js');

app.use(index);

app.listen(process.env.PORT || 3000);
