const mainMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");



openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);


function show(){
    mainMenu.style.width = '250px';
    m
}
function close(){
    mainMenu.style.width = '0';
}