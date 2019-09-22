'use strict';

eventsApp.controller('MainMenuController',
    function EditEventController($scope, $location) {
 
        console.log("In main menu controller")
        console.log('protocol: ' + $location.protocol());  
        
        $scope.createEvent = function() {
            $location.url('/newEvent');
        };

    });