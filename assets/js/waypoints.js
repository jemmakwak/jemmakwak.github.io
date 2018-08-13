$(document).ready(function(){

  if ($(window).width() > 750) {
      var $top = $('.top');
      $top.waypoint(function() {
        $top.addClass('animate-in');
      }, {offset: '50%'});

      var $projContainer = $('.projects-container');
      $projContainer.waypoint(function(direction) {
        if (direction == 'down') {
          $projContainer.addClass('animate-in');
        } else {
          $projContainer.removeClass('animate-in');
        }
      }, {offset: '90%'});

      var $landingintro = $('.landing-intro');
      $landingintro.waypoint(function() {
        $landingintro.addClass('animate-in');
      }, {offset: '50%'});

      var $pageintro = $('.page-intro');
      $pageintro.waypoint(function() {
        $pageintro.addClass('animate-in');
      }, {offset: '50%'});


      var $intro = $('.intro');
      $intro.waypoint(function() {
        $intro.addClass('fadeIn-delay');
      }, {offset: '50%'});

      var $container = $('.container');
      $container.waypoint(function() {
        $container.addClass('animate-in');
      }, {offset: '50%'});

      var $description = $('.description');
      $description.waypoint(function() {
        $description.addClass('animate-in');
      }, {offset: '60%'});

      // $(".page-image").click(function() {
      //   console.log("pic selected");
      //   $(this).addClass("enlarge");
      //   $(".pic-overlay").show();
      //   $(this).removeClass(".page-image");
      // })
      //
      // $(".pic-overlay").click(function() {
      //   console.log("remove everything");
      //   $(".page-image").removeClass("enlarge");
      //   $(this).css("display", "none");
      //   $(this).addClass(".page-image");
      //
      // })

  } else {
    $(".page-intro").css("opacity", "1");
    $(".landing-intro").css("opacity", "1");
    $(".top").css("opacity", "1");
    $(".projects-container").css("opacity", "1");
    $(".intro").css("opacity", "1");
    $(".container").css("opacity", "1");
    $(".description").css("opacity", "1");
  }

});
