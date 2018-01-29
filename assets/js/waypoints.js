$(document).ready(function(){



  if ($(window).width() > 500) {

      var $intro = $('.float');
      $intro.waypoint(function() {
        $intro.addClass('animate-in');
      }, {offset: '50%'});

      var $projContainer = $('.projects-container');
      $projContainer.waypoint(function(direction) {
        if (direction == 'down') {
          $projContainer.addClass('animate-in');
        } else {
          $projContainer.removeClass('animate-in');
        }
      }, {offset: '90%'});

      var $projPage = $('.float-project');
      $projPage.waypoint(function() {
        $projPage.addClass('animate-in');
      }, {offset: '50%'});

      var $content = $('.description-proj');
      $content.waypoint(function() {
        $content.addClass('animate-in');
      }, {offset: '50%'});

      var $actualContent = $('.content');
      $actualContent.waypoint(function() {
        $actualContent.addClass('animate-in');
      }, {offset: '60%'});
  } else {
    
  }

});
