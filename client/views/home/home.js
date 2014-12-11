(function(){
  'use strict';

  angular.module('mean-template')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.title = 'ShowShooshi';
    $scope.hideMexican = true;

    // $scope.toggleMexican = function(){
    //   $scope.hideMexican = !!!$scope.hideMexican;

      // if($scope.hideMexican === true){
      //   $('.input_userSearch').addClass('animated fadeOutLeft');
      // }else if($scope.hideMexican === false){
      //   $('.input_userSearch').addClass('animated fadeInRight');
      // }

    // };

    Home.getMessage().then(function(response){
      $scope.mean = response.data.mean;

      $interval(function(){
        $scope.mean = _.shuffle($scope.mean);
      }, 500);
    });
  }]);
})();
