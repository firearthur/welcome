(function(){
    
    
    var events = function($http){
      
      var getEvents = function(){
          return $http.get("events.json")
            .then(function(response){
                return response.data;
            });
      };
      
      
      
     return {
            getEvents:getEvents
        }   
    };
    
    CalenderApp.factory('events', events);
    
}());