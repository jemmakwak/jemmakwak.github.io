$(document).ready(function(){

  // Scroll to Div

  $(".about").click(function() {
      $('html,body').animate({
          scrollTop: $(".about").offset().top},
          'slow');
  });
  $(".work").click(function() {
      $('html,body').animate({
          scrollTop: $(".design").offset().top},
          'slow');
  });
  $(".contact").click(function() {
      $('html,body').animate({
          scrollTop: $(".contact").offset().top},
          'slow');
  });
});
