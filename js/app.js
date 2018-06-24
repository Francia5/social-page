$(document).ready(function () {

    // ******************FUNCION PARA SPLASH******************//
    setTimeout(function() {
       $('#splash').fadeOut(500);
    }, 1000);

    // ****************Initialize Firebase*************************//
    var config = {
        apiKey: "AIzaSyCx8JdUy1aGwONSyBh7vjmebLHejMIs97g",
        authDomain: "beauty-to-go-7d747.firebaseapp.com",
        databaseURL: "https://beauty-to-go-7d747.firebaseio.com",
        projectId: "beauty-to-go-7d747",
        storageBucket: "beauty-to-go-7d747.appspot.com",
        messagingSenderId: "497725908436"
    };
    
    firebase.initializeApp(config);

    //*********INICIALIZACION CONTENEDOR LOG IN-SING UP*********//
    $('.collapsible').collapsible();


    $('#btn-next1').click(goToMainPage);

    // *************FUNCION PARA ENLAZAR EL BOTON*************//
    function goToMainPage (event){
        event.preventDefault();
        window.location.href= 'view-principal.html';
    }
});

