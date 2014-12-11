(function(){
  'use strict';

  angular.module('mean-template')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){

    var occupations = ['Sushi', 'Mexican', 'Italian'];

    // $scope.title = 'ShowShooshi';

    // $scope.hideMexican = true;



    $scope.occupation = occupations[0];
    //$intervals are like a loop
    $interval(function(){
      var rnd = Math.floor(Math.random() * occupations.length);
      $scope.occupation = occupations[rnd];
    }, 2500);
  }]);
})();
