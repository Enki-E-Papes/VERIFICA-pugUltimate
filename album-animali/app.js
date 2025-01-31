var express = require('express');
var app = express();
const animals = require("animals.json");
app.get('/', function (req, res) {
res.send('Hello World!');
});
app.get('/api/album-animali', function (req, res) {
    res.send(animals);
    });
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});