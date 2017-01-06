var express = require('express')
var app = express()

	app.get('/', function (req, res) {
		  res.send('Hello World!!!!!!!!!!!!!!!!!!')
	})

var server = app.listen(3000, "192.168.0.244", function () {

	var host = server.address().address;
	var port = server.address().port;

	// console.log(host);
	// console.log(port);
	      
	console.log('Example app listening on http://%s:%s', host, port);
        })
	 
	   
