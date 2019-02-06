$(document).ready(function () {

    $('.item h3').click(function () {
        // close all before
        $('.sub-list').slideUp();
        // remove expanded class for all except me
        $('.item h3').not(this).removeClass('expanded');
        // open sub list by clicking on title h3
        $(this).next().stop(true).slideToggle();
        // add class expanded for triangles rotation
        $(this).toggleClass('expanded');
    });






});