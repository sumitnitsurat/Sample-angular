'use strict';

module.exports = function () {
    return {
        restrict: 'E',
        scope: {
            data: '=',
            metric: '='
        },
        link: function (scope, element, attrs) {

            var data = [];
            var metricName = '';
            scope.$watch('data', function (data) {
                if (data) {

                    data = scope.data;
                    metricName = scope.metric;
                    for (var key in data) {
                        var table = '<div class="panel panel-default">';
                        table += '<table class="table-condensed table-bordered table-striped"><thead><tr style="background:#5e7e89"><th>Top ' + metricName + ' ' + key + '<thead></th></tr>'

                        table += '<tbody>';
                        for (var entity in data[key]) {
                            table += '<tr> <td><span class="badge pull-right" style="color:#000">' + data[key][entity] + '</span>' + entity + '</td></tr>';
                        }
                        table += '</tbody>';
                        table += '</table>'
                        table += '</div>';

                        $(element[0]).append(table);
                    }
                }

            });
        }
    }
};