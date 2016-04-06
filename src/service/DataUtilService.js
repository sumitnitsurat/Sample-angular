module.exports = function (ajaxCall, TIME,ALERT_LEVEL) {
    var du = this;

    this.getAllMetricsData = function (apiSubUrl) {
        var apiUrl = './metrics.json';
        return ajaxCall.get(apiUrl);
    };

    du.getAlertCount = function (alertData) {
        var count = 0;
        for (var metric in alertData) {
            for (var alert in alertData[metric]) {
                count += alertData[metric][alert].length;
            }
        }
        return count;
    }

    du.getDataIndex = function (response,indexData) {
        
        for(var alertType in  ALERT_LEVEL){
            var index =0;
            for (var j = 0; j < response.data.length; j++) {
                var metricName = response.data[j].results[0].series[0].name;
                if(indexData[metricName][alertType] === undefined)
                    continue;
                if (indexData[metricName][alertType].length > 0) {
                    du.alertStatus = alertType;
                    du.notificationColor = alertType;
                    return j;
                }
            }
        }
        du.alertStatus = "info";
        du.notificationColor = "info";
        return index;
    }

    du.selectedTimeFilter = TIME.TODAY;

    du.getTimeFilterRange = function () {
        return du.selectedTimeFilter;
    }

    du.setSelectedTimeFilter = function(timeFilter){
        du.selectedTimeFilter = timeFilter;
    }

    Number.prototype.padLeft = function (base, chr) {
        var len = (String(base || 10).length - String(this).length) + 1;
        return len > 0 ? new Array(len).join(chr || '0') + this : this;
    }

    du.formatDate = function (date) {
        var d = new Date(date),
            dformat = [(d.getMonth() + 1).padLeft(),
                    d.getDate().padLeft(),
                    d.getFullYear()].join('/') +
            ' ' + [d.getHours().padLeft(),
                    d.getMinutes().padLeft(),
                    d.getSeconds().padLeft()].join(':');
        return dformat;
    };
};
