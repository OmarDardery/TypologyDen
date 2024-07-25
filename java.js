var menuButton = document.querySelector(".menubutton");
var menu = document.querySelector(".menu");
menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("rotated");
    menu.classList.toggle("hidden");
})