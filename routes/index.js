var express = require('express');
var base64 = require('base-64');
var router = express.Router();

module.exports.ensureAuthenticated = function ensureAuthenticated(req, res, callback){
	if(req.isAuthenticated()){
		//return next();
		callback(null)
	} else {
		//req.flash('error_msg','You are not logged in');
		var url = 'http://'+req.headers.host + req.url;
		console.log("Current URL: ", url);
		var encodedURL = base64.encode(url);
		res.redirect('/users/login?redirect='+encodedURL);
	}
}
