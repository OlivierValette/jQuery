$(document).ready (function () {

    $('html body').append('<button class="btt-btn">Haut de page</button>');
    $('.btt-btn').hide();

    $('.btt-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $(window).scroll(function () {
        if ( $(this).scrollTop() > 300 ) {
            $('.btt-btn').fadeIn();
            $('body').addClass('scrolled');
        } else {
            $('.btt-btn').fadeOut();
            $('body').removeClass('scrolled');
        }
    })

});