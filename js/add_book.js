$(document).ready(function() {
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
    
    $("#book-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit').click(function() {
      add_this();
    });

    firebase.auth().onAuthStateChanged(user => {
        if(!user) {
            window.location = 'index.html';
            }
    });

});

function add_this()
{
    var BookCode = document.getElementById("book_code").value;
    var BookName = document.getElementById("book_name").value;
    var Author1 = document.getElementById("author1").value;
    var Author2 = document.getElementById("author2").value;
    var Subject = document.getElementById("Subject").value;
    var tags = document.getElementById("tags").value;
    var db = firebase.firestore();
 
    db.collection("books").doc(BookCode).set({
        bookcode: BookCode,
        bookname : BookName,
        author1: Author1,
        author2: Author2,
        subject : Subject,
        tags : tags
    })
    .then(function() {
        console.log("Document successfully written!");
        window.alert("Successfully Book Added");
        window.location = 'admin_portal.html';
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
