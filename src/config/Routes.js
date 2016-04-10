module.exports = function ($routeProvider) {
    $routeProvider
    .when('/home',
        {
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            templateUrl:'../views/Home.html'

        })
    .when('/home/days-to-full/:id',
        {
            templateUrl: '../views/Home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
    .when('/home/heatmap/:id',
        {
            templateUrl: '../views/Heatmap.html',
            controller: 'HeatMapController',
            controllerAs:'heatMapCtrl'
        })
    .when('/home/fastest-growth',
        {
            templateUrl: '../views/Home.html',
            controller: 'HomeController',
            controllerAs:'homeCtrl'
        })
    .when('/home/highest-utilization',
        {
            templateUrl: '../views/Heatmap.html',
            controller: 'HomeController',
            controllerAs:'homeCtrl'
        })
    .when('/:tab/:id',
        {
            templateUrl: '../views/expanded-views/EntityDetailView.html',
            controller: 'ServerController',
            controllerAs: 'serverCtrl'
        })
     .when('/:tab/:id/alert-view',
        {
            templateUrl: '../views/expanded-views/AlertCrudOpsView.html',
            controller: 'alertCrudOpsController',
            controllerAs: 'alertCrudCtrl'
        })
    .when('/:tab/:id/:subTab',
        {
            templateUrl: '../views/expanded-views/EntityDetailView.html',
            controller: 'ServerController',
            controllerAs: 'serverCtrl'
        })
    .otherwise(
        {
            redirectTo: '/home'
        });

};
