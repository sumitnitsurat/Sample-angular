module.exports = function ($compile) {
    return {
        restrict: 'A',
		link:function(scope,element,attrs){
			element.bind("click", function(){
				angular.element(document.getElementsByClassName('dashboard-menu')).append($compile("<li><a href='#home/dashboard/"+scope.crtDashboardCtrl.dashboardName+"'><i class='fa fa-circle-o'></i>"+scope.crtDashboardCtrl.dashboardName+"</a></li>")(scope));
			});			
		}
	}
};
   
