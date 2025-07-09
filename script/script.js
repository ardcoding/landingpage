let menuButton = document.getElementsByClassName('hamburger-button')[0];
let closeButton = document.getElementsByClassName('close-button')[0];
let menu = document.getElementsByClassName('menu')[0];
let menumodal = document.getElementsByClassName('menu-modal')[0];

closeButton.addEventListener('click', () => {
    menu.style.display="none";
    menumodal.style.display="none";
    closeButton.style.display="none";
    menuButton.style.display="block";
})
menuButton.addEventListener('click', () => {
    menu.style.display="block";
    menumodal.style.display="grid";
    closeButton.style.display="block";
    menuButton.style.display="none";
})