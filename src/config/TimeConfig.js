'use strict';

module.exports = {
    'TIME': {
        'TODAY': {
            getStartTime: function () {
                var d = new Date();
                var x = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate(), 0, 0, 0, 0);
                return x;
            },

            getEndTime: function () {
                return new Date();
            },
            'label': 'Today'
        },
        'YESTERDAY': {
            getStartTime: function () {
                var date = new Date();
                date.setDate(date.getDate() - 1);
                date.setHours(0);
                date.setMinutes(0);
                date.setMilliseconds(0);
                return date;
            },

            getEndTime: function () {
                var d = new Date();
                var x = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate(), 0, 0, 0, 0);
                return x;
            },
            'label': 'Yesterday'
        },
        'LAST_7_DAYS': {
            getStartTime: function () {
                var date = new Date();
                date.setDate(date.getDate() - 7);
                return date;
            },

            getEndTime: function () {
                return new Date();
            },
            'label': 'Last 7 Days'
        },
        'LAST_30_DAYS': {
            getStartTime: function () {
                var date = new Date();
                date.setDate(date.getDate() - 7);
                return date;
            },

            getEndTime: function () {
                return new Date();
            },
            'label': 'Last 30 Days'
        },
        'THIS_MONTH': {
            getStartTime: function () {
                var date = new Date();
                date.setDate(date.getDate() - date.getDate());
                date.setHours(0);
                date.setMinutes(0);
                date.setMilliseconds(0);
                return date;
            },

            getEndTime: function () {
                return new Date();
            },
            'label': 'This Month'
        },
        'LAST_MONTH': {
            getStartTime: function () {
                var date = new Date();
                date.setDate(date.getDate() - date.getDate() - 30);
                date.setHours(0);
                date.setMinutes(0);
                date.setMilliseconds(0);
                return date;

            },

            getEndTime: function () {
                var date = new Date();
                date.setDate(date.getDate() - date.getDate());
                date.setHours(0);
                date.setMinutes(0);
                date.setMilliseconds(0);
                return date;

            },
            'label': 'Last Month'
        },
        'CUSTOM_RANGE': {
            getStartTime: function () {

            },

            getEndTime: function () {

            },
            'label': 'Custom Range'
        }
    }

};