$(document).ready(function(){

  $(".right-menu").mouseover(function() {
    resetAll();
  })

  function reduceRest(rest, index) {
    for (i = 0; i < rest.length; i++) {
      if (i == index) {
        console.log("don't do anything");
      } else {
        $(rest[i]).css("opacity", "0.5");
      }
    }
  }

  function resetAll() {
    var projects = ['#bcourses', '#piazza', '#bi', "#bt", "#octo", "#illos"];
    for (i = 0; i < projects.length; i++) {
      $(projects[i]).css("opacity", "1");
    }
  }

  function keyImage(src, backgroundColor, highlight) {
    $(".background-img img").attr("src", src);
    $(".background-img").css("scale", "1.1");
    $(".overlay").css("background-color", backgroundColor);
    var projects = ['#bcourses', '#piazza', '#bi', "#bt", "#octo", "#illos"];
    var index = projects.indexOf(highlight);
    reduceRest(projects, index);
  }

  $('.closebtn').click(function() {
    console.log("reset all!");
    $("body").removeClass('stop-scrolling');
    // mobile reset
    $('body').unbind('touchmove');
    resetAll();
  })

  $(".menu").click(function() {
    $("body").addClass('stop-scrolling');
    // mobile freeze
    $('body').bind('touchmove', function(e){e.preventDefault()});
  })

  $('#bcourses').mouseover(function () {
    resetAll();
    var bcourses = "assets/img/bcourses/preview.png";
    var bblue = "#2B56E5";
    keyImage(bcourses, bblue, "#bcourses");
  });


  $('#piazza').mouseover(function () {
    resetAll();
    var piazza = "assets/img/piazza/key.gif";
    var purple = "#8C40F4";
    keyImage(piazza, purple, "#piazza");
  });

  $('#bi').mouseover(function () {
    resetAll();
    var bi = "assets/img/bi.png";
    var orange = "#E68640";
    keyImage(bi, orange, "#bi");
  });

  $('#bt').mouseover(function () {
    resetAll();
    var bt = "assets/img/bt/preview.png"
    var blue = "#4E71E6";
    keyImage(bt, blue, "#bt");
  });

  $('#octo').mouseover(function () {
    resetAll();
    var octo = "assets/img/octo/landing.png"
    var pink = "#F440BD";
    keyImage(octo, pink, "#octo");
  });

  $("#illos").mouseover(function() {
    resetAll();
    var illos = "assets/img/fun/extra.png";
    var green = "#40F47E";
    keyImage(illos, green, "#illos");
  })





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
