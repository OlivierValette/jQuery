$(document).ready(function () {

    $('#get-json-btn a').click(function (e) {

        e.preventDefault();

        $.getJSON('json-data.php', function (data) {
            //  Pour une valeur unique :
            //  $('#main-article .card-block').html('<p>spot1 : ' + data.spot1 + '</p>');
            let output = '<ul>';
            $.each( data, function( key, value ) {
                output += '<li>' + key + ' : ' + value + '</li>';
            });
            output += '</ul>';
            $('#main-article .card-block').html(output);

        });

    });


});