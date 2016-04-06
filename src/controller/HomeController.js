'use strict';

module.exports = function ($scope, $filter, $location, dataUtilService) {
    var hc = this;

    hc.widgets = HOME_PROPS.widgets;
    hc.alertData = '';
    hc.data = [];
    hc.alert_count = [];
    hc.alertDetail = [];
    hc.alertStatus = [];
    hc.notificationColor = [];

    $scope.$watch(function(){
         hc.entityRouteId = commonUtilService.getEntityId();
    });

    var widgetCallback = function (response, i) {
        hc.alertDetail[i - 1] = $filter('alertData')(response, SIDE_MENUS_PROPS[SIDE_MENUS[i]].entity_type);

        //get the index of the metric in the response according to the alert
        var index = dataUtilService.getDataIndex(response,hc.alertDetail[i - 1]);
        //get data for the donut chart of that metric
        hc.data[i-1] = $filter('data')(response.data[index]);

        hc.alert_count[i-1] = dataUtilService.getAlertCount(hc.alertDetail[i - 1]) || 0;
        hc.alertStatus[i-1] = dataUtilService.alertStatus;
        hc.notificationColor[i-1] = dataUtilService.notificationColor;
    };

    for (var i = 1; i < SIDE_MENUS.length; i++) {
        //let j = i;
        dataUtilService.getAllMetricsData(SIDE_MENUS_PROPS[SIDE_MENUS[i]].api_link)
            .then(
                function(i){
                    return function(response){
                        widgetCallback(response, i);
                    };
                }(i)
            );
    }

    hc.dynamicPopover = {
        templateUrl: '../views/components/CustomAlert.html',
        title: 'Alerts'
    };

    hc.showDataPointDetails = function (curDom) {
        //Hide all other PopOvers excepts self
        if (curDom.target.nextSibling)
            $('.popover').not(curDom.target.nextSibling).hide();

        var currentChild = hc.getDataPointTitle(curDom);
        hc.donutChartPopover.title = " Data Center :" + currentChild + " Server";
    };

    hc.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

 
    hc.showMessage = function () {
        hc.showMessageFlag = !hc.showMessageFlag;
    }
}
