---
---

{% include bower_components/jquery/dist/jquery.min.js %}


/*! SVG Fallback for unsupported browsers */
if(!Modernizr.svg){$('img').each(function(){$(this).attr('src',$(this).data('fallback'));});}

/*!
 *  randomBackground.js - v0.1.3
 *  Attach a random background image to an element from a user supplied list on page load.
 *  https://github.com/michaelbragg/randombackground.js/
 *
 *  Made by Michael Bragg
 *  Under MIT License
 */

{% include bower_components/randombackground.js/dist/jquery.randombackground.min.js %}

;(function ( $ ){
  $(document).ready(function() {

    // To extend the default config settings
    // pass a object as an argument for the init function
    // eg. randomBackground.init({ images: 'image01.jpg', 'image02.jpg' });

    randomBackground.init( { parent: '.hero__image', background: '.hero', path: '{{ site.static }}/gui/hero/', images: ['hero_001.jpg', 'hero_002.jpg', 'hero_003.jpg', 'hero_004.jpg', 'hero_005.jpg', 'hero_006.jpg'], bgcolor: ['#304946', '#20110c', '#000', '#ea5c50', '#052534', '#242424'] });

  });

})( jQuery );

;(function ( $ ){
  $(document).ready(function() {

    $("#navicon").click(function () {
      $("#js-nav__main").toggleClass("js-is-active");
    });

    $(".alert__close").on('click', function(e) {
      e.preventDefault();
      $(this).parent('#js-alert').addClass('hidden');
    });

  });

})( jQuery );
