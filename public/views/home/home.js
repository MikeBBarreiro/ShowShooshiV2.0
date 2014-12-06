(function(){
  'use strict';

  angular.module('mean-template')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.title = 'ShowShooshi';
    Home.getMessage().then(function(response){
      $scope.mean = response.data.mean;

      $interval(function(){
        $scope.mean = _.shuffle($scope.mean);
      }, 500);
    });
  }]);
})();
