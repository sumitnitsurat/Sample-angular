'use strict';

module.exports = function (dataUtilService,areaGraphService) {
    var self = this;
	areaGraphService.getAreaGraphData(function(response){
		var areaGraphData = response;
		var areaGraphOptions = areaGraphService.getAreaGraphOptions();
		AreaGraph(areaGraphData.data,areaGraphOptions.AreaGraphOptions);
	});


}
