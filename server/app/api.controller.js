var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config.json');


router.get('/getstring/:id', function (req,res) {


	var id = req.params.id;

	var text = "सानो छ खेत सानो छ बारी सानै छ जहान, नगरी काम पुग्दैन खान साझ र बिहान, बिहानपख झुल्किनछ घाम देउराली पाखामा, आसरे गीत घन्किनछ अनि सुरिलो भाकामा";
	res.json({text : text});
});

module.exports = router;