setTimeout(() => {
const clientId = "1074747983096201317";
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);
async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        buttons: [{ label: "Discord", url: "https://discord.gg/eJVKVXJPuk" }, { label: "Site Web", url: "https://eronix.fr" }],
        state: `Serveur Moddée (1.12.2)`,
        startTimestamp: Date.now(),
        largeImageKey: '512x512',
        largeImageText: `eronix.fr`,
        smallImageKey: `https://minotar.net/helm/${username}/40.png`,
        smallImageText: `${username}`,
        instance: false,});};

RPC.on('ready', async () => {setActivity();});
RPC.login({ clientId }).catch(err => console.error(err));}, 10e3);