var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num);//1

app.use(function (req, res, next) {
    console.log('Record	timestamp');
    next();
});

app.use(bodyParser.json());

app.post('/calculator/rest/powery', function (req, res, next) {
    var body = req.body;
	var x = body.x;
	var y = body.y;
	var result = Math.pow(x,y);
	var object = {
        "x":x,
        "y":y,
        "result  x power y ":result
	}
    res.json(object);
});

app.post('/calculator/rest/squareroot', function (req, res, next) {
    var body = req.body;
	var x = body.x;
	var result = Math.sqrt(x);
	var object = {
        "x":x,
        "result squareroot x ":result
	}
    res.json(object);
});

app.post('/calculator/rest/cmtoinch', function (req, res, next) {
    var body = req.body;
	var x = body.x;
	var result = x*0.39370;
	var object = {
        "x":x,
        "result squareroot x ":result
	}
    res.json(object);
});

app.listen(3000,function() {
    console.log('Starting node on port 3000');
});