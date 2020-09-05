(function($) {
    "use strict";
    // Show or hide the sticky footer button
    // $(window).on('scroll', function(event) {
    //     if ($(this).scrollTop() > 600) {
    //         $('.back-to-top').fadeIn(200)
    //     } else {
    //         $('.back-to-top').fadeOut(200)
    //     }
    // });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });




    // Hamburger-menu
    $('.hamburger-menu').on('click', function() {
        $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
        $('.hamburger-menu .line-center').toggleClass('current');
        $('.hamburger-menu .line-bottom').toggleClass('current');
    });

    $('.hamburger-menu').on('click', function() {
        $('.body_overlay').addClass('open');
    });
    $('.body_overlay').on('click', function() {
        $(this).removeClass('open');
        $('.ofcavas-menu').removeClass('current');
        $('.hamburger-menu .line-center, .hamburger-menu .line-bottom, .hamburger-menu .line-top').removeClass('current');
    });


})(jQuery);