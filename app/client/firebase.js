const username = localStorage.getItem('username');
const firebaseConfig = {
    apiKey: "AIzaSyAqmtPKLEsEzG-SZlldqNrXJp4xTiE2LnA",
    authDomain: "eronix01-2c077.firebaseapp.com",
    databaseURL: "https://eronix01-2c077-default-rtdb.firebaseio.com",
    projectId: "eronix01-2c077",
    storageBucket: "eronix01-2c077.appspot.com",
    messagingSenderId: "930524623646",
    appId: "1:930524623646:web:ebd7a0ab82c62db26f8f0f"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

firebase.auth().onAuthStateChanged((user) => {
    if (user) { var uid = user.uid;
        const fetchUsers = db.ref(`/users/${uid}`);
        fetchUsers.on('value', function (snapshot) {
            const users = snapshot.val();
            const pdpMC = `https://minotar.net/helm/${users.username}/40.png`;
            document.getElementById("pdpMC").src = pdpMC;
            setInterval(() => {localStorage.setItem('username', users.username);
            localStorage.setItem('token', "lkTYDm4WmKhXCVBUAbTkJbn2s9J2");}, 1);
            //GROUP ACCOUNT
            document.getElementById("groupSkin").src = `https://minotar.net/armor/body/${users.username}/150.png`;
            document.getElementById("groupIMG").src = `https://minotar.net/helm/${users.username}/40.png`;
            document.getElementById("groupNAME").innerText = `${users.username}`;
            document.getElementById("groupID").innerText = `${users.uid}`;});
            document.getElementById("online").style.background = "#00ff00";};});

async function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    firebase.auth().signOut().then(() => {window.location = "../index.html";});};

const fetchChat = db.ref("/mails");
fetchChat.on("child_added", function (snapshot) {
    const mail = snapshot.val();
    const msg = `<div class="mailApp"><div class="mail-header"><img src="${mail.authorimg}"><ul><span>${mail.author}</span><p>À :<span>@Tous les membres</span></p></ul></div><div class="mail-content"><h1>${mail.title}</h1><p>${mail.description}</p></div></div>`;
    const mailSnop = document.getElementById("mailAuto");
    if (mailSnop) { mailSnop.innerHTML += msg; };});

const fetchNews = db.ref("/launcher");
fetchNews.on("child_added", function (snapshot) {
    const news = snapshot.val();
    const msg = `<div class="update"><img src="${news.img}"><div class="content"><ul><h2>${news.title}</h1><input type="text" placeholder="${news.description}" disabled></ul><a href="${news.url}"><i class="fa-regular fa-arrow-up-right-from-square"></i></a></div></div>`;
    const newsSnop = document.getElementById("newsAuto");
    if (newsSnop) { newsSnop.innerHTML += msg; };});