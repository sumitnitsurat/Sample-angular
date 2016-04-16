var express = require('express');
var fs = require('fs');
var app = express();
var obj;

app.use(express.static(__dirname+ "/public"));
app.set('port', 9999);
app.get('/getAreaGraphData',function(req,res){

	// Read the file and send to the callback
	fs.readFile('./public/json/AreaGraph.json', handleFile)

	// Write the callback function
	function handleFile(err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
	}
	res.send(obj);
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
