// Login form
$('#login-form').submit( function(e) {

    // bloque la validation
    e.preventDefault();

    // fonction permettant de faire de l'ajax
    $.ajax({
        type: 'POST', // méthode de transmission des données au fichier php
        url: 'login.php', // url du fichier php
        data: 'username='+$('#username').val()+'&password='+$('#password').val(), // données à transmettre
        success: function(data){
            // si l'appel a bien fonctionné
            if( !$('#alert').length ) $('main').prepend('<div id="alert"></div>');
            if( data ==  1 ) {
                // si la connexion en php a fonctionnée
                $('#alert').html('<div class="alert alert-success" role="alert">Vous avez été connecté avec succès !</div>');
                $('#login-form').hide();
                $('#logout-form').show();
            } else {
                $('#alert').html('<div class="alert alert-warning" role="alert">Erreur lors de la connexion...</div>');
            }
        }
    });

});

/* VARIANTE

$('#login-form').submit(function(e){

    e.preventDefault();

    var posting = $.post('login.php', {
        username: $('#username').val(),
        password: $('#password').val()
    });

    posting.done(function(data){
        if( !$('#alert').length ) $('main').prepend('<div id="alert"></div>');
        if(data==1) {
            // si la connexion en php a fonctionnée
            $('#alert').html('<div class="alert alert-success" role="alert">Vous avez été connecté avec succès !</div>');
        } else {
            $('#alert').html('<div class="alert alert-warning" role="alert">Erreur lors de la connexion...</div>');
        }
    });

});
*/

$('#logout').click(function (e) {

    // bloque le lien
    e.preventDefault();

    $.ajax({
        type: 'POST',
        url: 'logout.php',
        success: function(){
            if( !$('#alert').length ) $('main').prepend('<div id="alert"></div>');
            $('#alert').html('<div class="alert alert-success" role="alert">Vous avez été connecté avec succès !</div>');
            $('#login-form').show();
            $('#logout-form').hide();
            $('#alert').html('<div class="alert alert-success" role="alert">Vous avez été déconnecté avec succès !</div>');
        }
    });

});

$('#nav-ajax a').click(function (e) {
    e.preventDefault();
    let target = $(this).attr('href');
    $('#main-article').load(target+' #content')
});

