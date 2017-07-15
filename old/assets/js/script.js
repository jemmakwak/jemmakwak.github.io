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

  $("#face-container").hover(function(){
    if ($('#face-container').hasClass('blur')) {
      $('.blur').removeClass('blur');
    }
    else {
      $('#face-container').addClass('blur');
    }
      });

  // Google Analytics

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-98200050-1', 'auto');
    ga('send', 'pageview');
  });
