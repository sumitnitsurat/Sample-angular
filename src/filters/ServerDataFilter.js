module.exports = function(){
    'use strict';
     return function (jsonData){
         var json =[];
         for(var i=0;i<3;i++)
            json.push(jsonData.results[0].series[0].values[i][4]);

         return json;
        };
};