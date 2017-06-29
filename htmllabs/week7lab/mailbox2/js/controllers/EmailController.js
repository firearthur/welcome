MailBoxApp.controller('EmailController', ['$scope', 'emails', '$routeParams', function($scope, emails, $routeParams) {
   
    var onEmailsComplete = function(data){
        // $scope.emails = data;
        $scope.email = data[$routeParams.id];
    
    };
    
    var onErr = function(err){
        console.log("couldn't get data.")
    };
        
    
    emails.getEmails().then(onEmailsComplete,onErr);
    
  
//     emails.success(function(data) {
    
//     $scope.email = data[$routeParams.id];
//   });
}]);