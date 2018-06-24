$(document).ready(function () {

    // ******************FUNCION PARA SPLASH******************//
    setTimeout(function() {
       $('#splash').fadeOut(500);
    }, 1000);

    //*********INICIALIZACION CONTENEDOR LOG IN-SING UP*********//
    $('.collapsible').collapsible();
});



    $('#btn-next1').click(goToMainPage);

    // *************FUNCION PARA ENLAZAR EL BOTON*************//
    function goToMainPage (event){
        event.preventDefault();
        console.log('hola');
        window.location.href= 'view-principal.html';
    }


