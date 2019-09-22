//eventsApp.factory('eventData', function ($http) {
eventsApp.factory('eventData', function ($resource) {
    
  var resource = $resource('/data/event/:id', {id:'@id'});

  return {

      //resource version 
       getEvent: function(eventId) {
        return resource.get({id:eventId});
       },   

       save: function() {
        event.id = 999
        return resource.save(event);
       },   

       getAllEvents: function() {
         console.log("In event data - getAllEvents")
        return resource.query();
       }

      //promises version 
      //  getEvent: function() {
      //   return $http({method: 'GET', url: '/data/event/1'})
      // }   

      //callback version 
      // getEvent: function(successcb) {
      //   $http({method: 'GET', url: '/data/event/1'}).
      //       success(function(data, status, headers, config) {
      //           successcb(data)
      //       }).
      //       error(function(data, status, headers, config) {
      //           $log.warn(data, status, headers(), config);
      //       });
      // }   

      

        // In line creation of event object data...

        // event : {
        //     name: 'Angular Boot Camp',
        //    //date: '1/1/2013',
        //     date: 1359781015626,
        //     time: '10:30 am',
        //     location: {
        //         address: 'Google Headquarters',
        //         city: 'Mountain View',
        //         province: 'CA'
        //     },
        //     imageUrl: '/img/angularjs-logo.png',
        //     sessions: [
        //         {
        //           name: 'Directives Masterclass',
        //           creatorName: 'Bob Smith',
        //           duration: 1,
        //           level: 'Advanced',
        //           abstract: 'In this session you will learn the ins and outs of directives!',
        //           upVoteCount: 0
        //         },
        //         {
        //           name: 'Scopes for fun and profit',
        //           creatorName: 'John Doe',
        //           duration: 2,
        //           level: 'Introductory',
        //           abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
        //           upVoteCount: 0
        //         },
        //         {
        //           name: 'Well Behaved Controllers',
        //           creatorName: 'Jane Doe',
        //           duration: 4,
        //           level: 'Intermediate',
        //           abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbors',
        //           upVoteCount: 0
        //         }
        //     ]   
        // }

   };

});