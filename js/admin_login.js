//admin@123

$(document).ready(function(){    
    const firebaseConfig = {
        apiKey: "AIzaSyDxdKsoVmse2ha5E5SxmwOQOI5wiYqvUOo",
        authDomain: "hjhjh-63544.firebaseapp.com",
        projectId: "hjhjh-63544",
        storageBucket: "hjhjh-63544.appspot.com",
        messagingSenderId: "56652869078",
        appId: "1:56652869078:web:84f619199ee4c505d8c877",
        measurementId: "G-DWC35F7Z22"
      };
      
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    $("#login-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit_data').click(function() {
      login();
    });

    $('#back_button').click(function()
    {
        logout();
    });

    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            window.location = 'admin_portal.html'; //After successful login, user will be redirected to home.html     
            }
        });

  });
  
function login(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(email === "admin@gmail.com")
    {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorMessage);
        });
    }
    
}
function logout()
{
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
}
