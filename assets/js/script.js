$(document).ready(function(){

  // Scroll to Div

  $(".design").click(function() {
      $('html,body').animate({
          scrollTop: $(".worker").offset().top},
          'slow');
  });
  $(".exp").click(function() {
      $('html,body').animate({
          scrollTop: $(".experience-head").offset().top},
          'slow');
  });
  $(".contact").click(function() {
      $('html,body').animate({
          scrollTop: $("#social-bar").offset().top},
          'slow');
  });

  $(".menu-item").hover(function(){
    $(this).css("color", "#221F28");
    $(this).css("-webkit-transition:color", ".2s ease-in")
  });

  $(".menu-item").mouseleave(function(){
    $(this).css("color", "#95A5A6");
    $(this).css("-webkit-transition:color", ".2s ease-out")
  });
});
