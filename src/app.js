(function(){
'use strict';
require('jquery');
require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('angular-ui-router');
    
var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

//Controllers

var homeController = require('./controllers/HomeController');


//Directives
var sideNavbarDirective = require('./directives/SideNavbar');
var donutDirective = require('./charts/DonutGraph');
var tableDirective = require('./charts/TableDirective');
//Services
var dataUtilService = require('./services/DataUtilService');

//Filters
var serverDataFilter = require('./filters/ServerDataFilter');
//Configs
var homeConfig = require('./config/HomeConfig');

app.config([ '$routeProvider', routesConfig]);
app.constant('HOME_PROPS',homeConfig);

app.service('dataUtilService', ['ajaxCall', 'TIME', 'ALERT_LEVEL',dataUtilService] );

app.filter('data',serverDataFilter );

app.controller('HomeController', ['$scope', '$filter', '$location', 'dataUtilService',homeController ]);


app.directive('sideNavbar', sideNavbarDirective);
app.directive('donutChart', donutDirective);
})();
