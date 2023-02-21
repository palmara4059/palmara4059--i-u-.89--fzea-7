const fs = require('fs');
const getAppDataPath = require('appdata-path');
const https = require('https');
const { app } = require('electron');
const modalSettings = document.getElementById("modalSettings");
const modalAccount = document.getElementById("modalAccount");
const modalRam = document.getElementById("modalRam");

/*----------[SETTINGS]----------*/
async function openSettings() {
    modalSettings.style.display = "flex";
}
async function closeSettings() {
    modalSettings.style.display = "none";
}


/*----------[ACCOUNT]----------*/
async function openModalAccount() {
    modalAccount.style.display = "flex";
}
async function closeModalAccount() {
    modalAccount.style.display = "none";
}

/*----------[RAM]----------*/
async function openModalRam() {
    modalRam.style.display = "flex";
}
async function closeModalRam() {
    modalRam.style.display = "none";
}

const rangeSlider = document.getElementById('rangeSlider');
rangeSlider.value = localStorage.getItem('ramMax');

setInterval(() => {
    document.getElementById('rangeValue').innerHTML = rangeSlider.value;
}, 1);

setInterval(() => {
    localStorage.setItem('ramMax', rangeSlider.value);
}, 5);
/*----------[RAM]----------*/