// Hey you! Thanks for stopping by. Everything you see here was coded by me personally. None of this is built on wordpress, wix, webflow, squarespace, etc.
//
// Hopefully you're just browsing around for fun, but I want to let you know that my work has been plagiarized... quite a bit recently. It makes me super sad and I hope those are not your intentions, but if you're here to copy code, please think twice about it. Is it really worth it to take someone's hard work and online brand to try to get a leg up? Thanks for reading, and I hope you understand the implications of your actions on others.
//
// Designed and developed by Jemma Kwak :-)

$(document).ready(function() {

  var behind = $('.behind').waypoint(function(direction) {
  //check the direction
      //add the class to start the animation
      $(this.element).addClass('fadeIn-delay');
      //then destroy this waypoint, we don't need it anymore
      this.destroy();
    }, {
    //Set the offset
    offset: '70%'
  });

  var work = $('.work-section').waypoint(function(direction) {
  //check the direction
      //add the class to start the animation
      $(this.element).addClass('fadeIn-delay');
      //then destroy this waypoint, we don't need it anymore
      this.destroy();
    }, {
    //Set the offset
    offset: '70%'
  });

    var midPics = $('.mid-screen').waypoint(function(direction) {
    //check the direction
      if(direction == 'down') {
        //add the class to start the animation
        $(this.element).addClass('fadeIn-delay');
        //then destroy this waypoint, we don't need it anymore
        this.destroy();
      }
      }, {
      //Set the offset
      offset: '70%'
    });


    var fullPics = $('.full-screen').waypoint(function(direction) {
    //check the direction
      if(direction == 'down') {
        //add the class to start the animation
        $(this.element).addClass('fadeIn-delay');
        //then destroy this waypoint, we don't need it anymore
        this.destroy();
      }
      }, {
      //Set the offset
      offset: '70%'
    });

    var proj = $('.project').waypoint(function(direction) {
      if (direction == 'down') {
        $(this.element).addClass('pop-in opaque');
        this.destroy();
      }
    }, {
        offset: '100%'
    });

    var $intro = $('.intro');
    $intro.waypoint(function() {
      $intro.addClass('fadeIn-delay');
    }, {offset: '50%'});

    var $pIntro = $('.project-intro');
    $pIntro.waypoint(function() {
      $pIntro.addClass('fadeIn-delay');
    }, {offset: '70%'});

    var $header = $('header');
    $header.waypoint(function() {
      $header.addClass('fadeFromTop');
    }, {offset: '50%'});

    var $footer = $('.home-footer');
    $footer.waypoint(function() {
      $footer.addClass('fadeIn-slower');
    }, {offset: '90%'});

    var $profile = $('.profile');
    $profile.waypoint(function() {
      $profile.addClass('fadeIn-delay');
    }, {offset: '50%'});

    var $aboutme = $('.about-me');
    $aboutme.waypoint(function() {
      $aboutme.addClass('fadeIn-delay');
    }, {offset: '100%'});

});
