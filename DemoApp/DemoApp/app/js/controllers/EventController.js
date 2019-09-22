'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $log, $routeParams) {
        
        //$scope.snippet = '<span style="color:red">hi there</span>' 
        //$scope.boolvalue = true;
        
        $scope.sortorder = 'name';

        // Hard coded data version
        // $scope.event = eventData.event;

        //Callback version
        // eventData.getEvent(function(event) {
        //     $scope.event = event
        // });

        //Promises version
        // eventData.getEvent() 
        //     .success(function(event) {$scope.event = event; })
        //     .error(function(data, status, headers, config) {
        //         $log.warn(data, status, headers(), config);
        // });
        
        //Resources(rest) version 
        //$scope.event = eventData.getEvent($routeParams.eventId);
        
        eventData.getEvent($routeParams.eventId)
            .$promise
            .then(function(event) {$scope.event = event; console.log(event); })
            .catch(function(response) {console.log(response);}     
            );

        $scope.upVoteSession = function(session) {
          session.upVoteCount++;  
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;  
        };

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);
