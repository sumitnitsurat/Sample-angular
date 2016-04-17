var express = require('express');
var fs = require('fs');
var app = express();
var obj;
//read data from public folder
app.use(express.static(__dirname+ "/public"));
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

app.listen(5555, function() {
    console.log('Express server listening on port 5555');
});
