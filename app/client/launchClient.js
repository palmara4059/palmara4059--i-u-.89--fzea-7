const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();
const token = localStorage.getItem('token');
const ramMax = localStorage.getItem('ramMax');

let opts = {
    clientPackage: null,
    authorization: Authenticator.getAuth(username, token.value),
    root: getAppDataPath(".eronix"),
    version: { number: "1.12.2", type: "release", },
    forge: getAppDataPath('.eronix/forge.jar'),
    memory: { min: `1G`, max: `${ramMax}G` },
    server: { host: "play.eronix.fr", port: "25565" }
}
function play() { localStorage.setItem('etat', true); location.reload(); launcher.launch(opts); };

setInterval(() => {
    const etat = localStorage.getItem('etat');
    if (etat == "true") {
        launcher.launch(opts);
        localStorage.setItem('etat', false);
        document.getElementById("alertLaunch").style.display = "flex";
        document.getElementById("playLaunch").disabled = true;
        setTimeout(() => {
            document.getElementById("alertLaunch").style.display = "none";
            document.getElementById("playLaunch").disabled = false;
        }, 9000);
    };
}, 100);

launcher.on('debug', (e) => { console.log(e) });
launcher.on('data', (e) => { console.log(e) });