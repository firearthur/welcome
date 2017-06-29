angular.module("ExerciseApp").controller('MainController', ['$scope', function($scope) {
  
  $scope.exercises = [
    {
      name: 'Pushups',
      count: 20
    },
    {
      name: 'Squats',
      count: 15
    },
    {
      name: 'Pullups',
      count: 10
    },
    {
      name: 'Rows',
      count: 10
    },
    {
      name: 'Lunges',
      count: 10
    },
    {
      name: 'Step Ups',
      count: 10
    },
    {
      name: 'Sit Ups',
      count: 15
    }
  ];
  
  $scope.increase = function(exercise){
    var increasedExercise = $scope.exercises.indexOf(exercise);
    
    console.log(increasedExercise);
    
    $scope.exercises[increasedExercise].count++;
    console.log($scope.exercises[increasedExercise].count);
  };
  
  $scope.decrease = function(exercise){
    var decreasedExercise = $scope.exercises.indexOf(exercise);
    
    console.log(decreasedExercise);
    
    $scope.exercises[decreasedExercise].count--;
    console.log($scope.exercises[decreasedExercise].count);
  };
  
}]);