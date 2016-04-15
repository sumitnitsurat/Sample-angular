module.exports = function ($http, AREA_GRAPH_OPTIONS) {
	'use strict';
    var self = this;
	self.getAreaGraphData = function(callback){
	$http.get('./json/AreaGraph.json')
		.then(function(response){
			callback(response);
		})
	}
	self.getAreaGraphOptions = function(){
		return AREA_GRAPH_OPTIONS;
	}
};
