var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config.json');

var textCollection = require("../../data/type-content/strings.json");

var length = textCollection.length;

router.get('/getstring/:id', function (req,res) {


	var id = parseInt(req.params.id);

	console.log(req.params.id,id,length);

	if (id >=length) {
		id = 0;
	}


	var data = textCollection[id];

	res.json({data : data});
});

module.exports = router;