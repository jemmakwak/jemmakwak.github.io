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
