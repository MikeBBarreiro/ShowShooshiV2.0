(function(){
  'use strict';

  angular.module('mean-template')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    var occupations = ['Sushi', 'Mexican', 'Italian'];
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

    // Home.getMessage().then(function(response){
    //   $scope.mean = response.data.mean;
    //
    //   $interval(function(){
    //     $scope.mean = _.shuffle($scope.mean);
    //   }, 500);
    // });
    $scope.occupation = occupations[0];
    //$intervals is like a loop
    $interval(function(){
      var rnd = Math.floor(Math.random() * occupations.length);
      $scope.occupation = occupations[rnd];
    }, 1800);
  }]);
})();
