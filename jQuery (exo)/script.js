console.log(jQuery);

// flat JS : const ELEMENT = document.getElementById('test');
const ELEMENT = $('#test');

// change multiple css attributes
ELEMENT.css({
    'color': 'blue',
    'background-color': 'lightyellow'
})

$('body').append('<div id="test2"><p>lorem</p></div>');

// change only one css attribute
const ELEMENT2 = $('#test2');
ELEMENT2.css('color', 'red');

// toggle text button
$('#js-toggle').on('click', function() {
    ELEMENT.slideToggle(1500);
    $(this).text( ($(this).text() === "Cacher...") ? "Lire la suite..." : "Cacher..." );
});

$('#js-image').attr('src', 'test.jpg');
// or $('#js-image')[0].src = 'test.jpg';
