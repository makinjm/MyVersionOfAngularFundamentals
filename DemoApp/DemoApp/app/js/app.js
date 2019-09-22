'use strict';

//var eventsApp = angular.module('eventsApp', ['ngSanitize']);
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        console.log('in routing');
        $routeProvider.when('/newEvent',
            {
                templatesUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templatesUrl:'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventid',
            {
                templatesUrl:'templates/EventDetails.html',
                controller: 'EventController'
            });
        $routeProvider.otherwise(
            {
                redirectTo: '/events'
            });

        $locationProvider.html5Mode(true);
    });
