var provider = new firebase.auth.GoogleAuthProvider();

// Obtenemos la Data del Usuario por medio del provedor (google)
$("#login").click(function(){
    firebase.auth()
    .signInWithPopup(provider)
    .then(function (data) {
        var user = data.user;
        console.log(user);
        $(".inicio").hide();
        $(".usuario").show();
        $(".user-image").attr("src",user.photoURL);
        $("#name").text("Nombre: " + user.displayName);
        $("#email").text(user.email);
        
        
    }).catch(function(error){
        console.log(error);
        
    });
});

// Mostramos o no la información del usuario de acuerdo a su status
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // Si el usuario esta logeado
        $(".inicio").hide();
        $(".usuario").show();
        $(".user-image").attr("src", user.photoURL);
        $("#name").text("Nombre: " + user.displayName);
        $("#email").text(user.email);
    } else {
        // Si no esta logeado
        $(".inicio").show();
        $(".usuario").hide();
    }
});


$("#close").click(function(){
    firebase.auth().signOut().then(function(){
        $(".inicio").show();
        $(".usuario").hide();
    })
});

// Guardar datos del usuario
// function saveData (user) {
//     var infUser = {
//         uid:user.uid,
//         nombre:user.displayName,
//         email:user.email,
//         foto:user.photoURL
//     }
//     firebase.database().ref("users/" + user.uid)
//     .set(infUser)

    
// }

// Mostrar datos del usuario 
// $("#save").click(function(){
//     firebase.database().ref("telmex")
//     .set({
//         nombre:"Francia",
//         edad:"26",
//         sexo:"no tanto"
//     })
// });


// Obtener datos de Firebase
// firebase.database().ref("users")
// .on("child_added", function(s){
//     var user = s.val();
//     $("#root").append("<img src='"+user.photoURL +"' />");
    
    

// });

// function pedro() {
    
// }
// var juan = $(user).displayName().val;



