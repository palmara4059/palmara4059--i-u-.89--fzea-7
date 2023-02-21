firebase.auth().onAuthStateChanged((user) => {if (user) {window.location = ".././app/panel/app.html";};});

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
firebase.auth().signInWithEmailAndPassword(email, password)}