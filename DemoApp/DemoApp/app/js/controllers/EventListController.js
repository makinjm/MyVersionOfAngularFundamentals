'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, $location, eventData) {
        console.log("In events list builder")
        $scope.events = eventData.getAllEvents();
    }
);