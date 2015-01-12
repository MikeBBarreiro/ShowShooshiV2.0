(function(){
  'use strict';

  angular.module('mean-template')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){

    var foods = ['Sushi', 'Mexican', 'Italian', 'Chinese'];

    // $scope.title = 'ShowShooshi';

    // $scope.hideMexican = true;


    $scope.food = foods[0];
    //$intervals are like a loop
    $interval(function(){
      var rnd = Math.floor(Math.random() * foods.length);
      $scope.food = foods[rnd];
    }, 1500);
  }]);
})();
