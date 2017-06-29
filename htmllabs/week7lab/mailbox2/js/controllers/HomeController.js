angular.module("MailBoxApp").controller('HomeController', ['$scope', 'emails', function($scope,emails) {
    
    
    var onEmailsComplete = function(data){
        $scope.emails = data;
    
    };
    
    var onErr = function(err){
        console.log("couldn't get data.")
    };
        
    
    emails.getEmails().then(onEmailsComplete,onErr);
    
    
      
}]);