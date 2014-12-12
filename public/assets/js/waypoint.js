(function(){
  'use strict';

  $(document).ready(function(){
  });
  ////////////////// WAYPOINTS START ///////////////////

  $('.wp1').waypoint(function(){
    $('.wp1').addClass('animated bounceInDown');
  }, {
    offset: '100%'
  });



  ////////////////// WAYPOINTS END ///////////////////

  //function onClick(){
  //debugger;
  //document.getElementById('bleeP').play();
  //var bleep = new Audio();
  //bleep.src = '/audio/bleep.mp3';
  //}

})();
