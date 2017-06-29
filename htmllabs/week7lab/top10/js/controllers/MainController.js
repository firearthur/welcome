TopTenTvShows.controller('MainController', ['$scope','shows', function($scope,shows){

    var onShowsComplete = function(data){
        $scope.shows = data;
    
    };
    
    var onErr = function(err){
        console.log("couldn't get data.")
    };
        
    
    shows.getShows().then(onShowsComplete,onErr);
    
    
}]);