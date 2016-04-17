module.exports = function ($http, AREA_GRAPH_OPTIONS) {
	'use strict';
    var self = this;
	//function to read data from  nodejs api for area graph
	self.getAreaGraphData = function(callback){
		$http.get('/getAreaGraphData')
		.then(function(response){
			callback(response);
		})
	}
	//function to get options for area graph
	self.getAreaGraphOptions = function(){
		return AREA_GRAPH_OPTIONS;
	}
};
