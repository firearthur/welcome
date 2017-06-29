(function(){
    
    
    var shows = function($http){
      
      var getShows = function(){
          return $http.get("shows.json")
            .then(function(response){
                return response.data;
            });
      };
      
      
      
     return {
            getShows:getShows
        }   
    };
    
    TopTenTvShows.factory('shows', shows);
    
}());