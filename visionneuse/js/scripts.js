$(function () {

    function setDimension() {
        // Cale la hauteur sur celle de l'image large
        let h = $('.viewer .show').height();
        $('.viewer .large').height(h);
    }

    // sélection de l'image par survol du thumbnail
    $('.viewer .small li').hover(function () {
        // position du thumbnail dans la liste des small
        let i = $(this).index();
        // ciblage du correspondant dans la liste des larges
        $('.viewer .large li')
            .removeClass('show')
            .eq(i).addClass('show');
    });

    setDimension();
    $(window).resize(setDimension);



});