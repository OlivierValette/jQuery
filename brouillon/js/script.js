// assure que la page est chargée pour exécuter les scripts
// surtout pour ceux qui interagissent avec le DOM
// version abrégée : $(function() {});
$(document).ready(function () {

    $('.btn').click(function () {
        $('.para-1').hide();
    });

    $('.btn').hover(
        function () {
            console.log('entrée de hover')
    },
        function () {
            console.log('sortie de hover')
    })

});