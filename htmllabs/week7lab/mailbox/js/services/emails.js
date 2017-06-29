(function(){
    
    
    var emails = function($http){
      
      var getEmails = function(){
          return $http.get("emails.json")
            .then(function(response){
                return response.data;
            });
      };
      
      
      
     return {
            getEmails:getEmails
        }   
    };
    
    MailBoxApp.factory('emails', emails);
    
}());