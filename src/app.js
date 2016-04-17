(function(){
'use strict';

require('angular');
require('angular-route');
require('angular-ui-bootstrap');
 require('angular-ui-router');   
var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

//Controllers

var homeController = require('./controllers/HomeController');
var sideMenuController = require('./controllers/SideMenuController');
var headerController = require('./controllers/HeaderController');
var createDashboardController = require('./controllers/CreateDashboardController');
//Directives
var createDashboardDirective = require('./directives/CreateDashboardDirective');
var donutDirective = require('./directives/DonutGraph');
var tableDirective = require('./directives/TableDirective');
//Services
var dataUtilService = require('./services/DataUtilService');
var areaGraphService = require('./services/AreaGraphService');
//Filters
var serverDataFilter = require('./filters/ServerDataFilter');
//Configs
var homeConfig = require('./config/HomeConfig');
var timeConfig = require('./config/TimeConfig');
var areaGraphConfig = require('./config/AreaGraphConfig');

var routesConfig = require('./config/Routes');

app.config([ '$stateProvider', '$urlRouterProvider', routesConfig]);
app.constant('HOME_PROPS',homeConfig);
app.constant('TIME_PROPS',timeConfig);
app.constant('AREA_GRAPH_OPTIONS',areaGraphConfig);

app.service('dataUtilService', ['$http', 'TIME_PROPS', dataUtilService] );
app.service('areaGraphService', ['$http', 'AREA_GRAPH_OPTIONS',areaGraphService] );

app.filter('data',serverDataFilter );

app.controller('HomeController', ['dataUtilService','areaGraphService',homeController ]);
app.controller('SideMenuController', ['$scope', '$uibModal',sideMenuController ]);
app.controller('HeaderController', ['$scope', 'TIME_PROPS', 'dataUtilService',headerController ]);
app.controller('CreateDashboardController', ['$scope',createDashboardController ]);

app.directive('createDashboard', ['$compile',createDashboardDirective]);
app.directive('donutChart', donutDirective);
})();
