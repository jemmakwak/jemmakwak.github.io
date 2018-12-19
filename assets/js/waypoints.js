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

    var FadeTransition = Barba.BaseTransition.extend({
      start: function() {
        /**
         * This function is automatically called as soon the Transition starts
         * this.newContainerLoading is a Promise for the loading of the new container
         * (Barba.js also comes with an handy Promise polyfill!)
         */

        // As soon the loading is finished and the old page is faded out, let's fade the new page
        Promise
          .all([this.newContainerLoading, this.fadeOut()])
          .then(this.fadeIn.bind(this));
      },

      fadeOut: function() {
        /**
         * this.oldContainer is the HTMLElement of the old Container
         */

        return $(this.oldContainer).animate({ opacity: 0 }).promise();
      },

      fadeIn: function() {
        /**
         * this.newContainer is the HTMLElement of the new Container
         * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
         * Please note, newContainer is available just after newContainerLoading is resolved!
         */

        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        $el.css({
          visibility : 'visible',
          opacity : 0
        });

        $el.animate({ opacity: 1 }, 400, function() {
          /**
           * Do not forget to call .done() as soon your transition is finished!
           * .done() will automatically remove from the DOM the old Container
           */

          _this.done();
        });
      }
    });

    /**
     * Next step, you have to tell Barba to use the new Transition
     */

    Barba.Pjax.getTransition = function() {
      /**
       * Here you can use your own logic!
       * For example you can use different Transition based on the current page or link...
       */

      return FadeTransition;
    };


    Barba.Pjax.start();

});
