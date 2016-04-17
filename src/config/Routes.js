module.exports = function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$urlRouterProvider.when('/home','/home/dashboard/:id');
    $stateProvider
	.state('home', {
			url: '/home',
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            templateUrl:'../views/Home.html'

        })
		.state('home.dashboard', {
    
			url: '/dashboard/:id',
            templateUrl: '../views/components/Dashboard.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
};
