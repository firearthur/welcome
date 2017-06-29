CalenderApp.controller('DayController', ['$scope', 'events', function($scope,events) {
    
    var onEventsComplete = function(data){
        $scope.day = data;
    
    };
    
    var onErr = function(err){
        console.log("couldn't get data.")
    };
        
    
    events.getEvents().then(onEventsComplete,onErr);
    
    
}]);