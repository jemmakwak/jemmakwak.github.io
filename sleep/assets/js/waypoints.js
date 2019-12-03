$(document).ready(function() {

  var behind = $('.tagline').waypoint(function(direction) {
  //check the direction
      //add the class to start the animation
      $(this.element).addClass('fadeIn-delay');
      //then destroy this waypoint, we don't need it anymore
      this.destroy();
    }, {
    //Set the offset
    offset: '50%'
  });

  var block = $('.block').waypoint(function(direction) {
  //check the direction
      //add the class to start the animation
      $(this.element).addClass('fadeIn-slower');
      //then destroy this waypoint, we don't need it anymore
      this.destroy();
    }, {
    //Set the offset
    offset: '90%'
  });


});
