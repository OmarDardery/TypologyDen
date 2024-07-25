var menuButton = document.querySelector(".menubutton");
var menu = document.querySelector(".menu");
menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("rotated");
    menu.classList.toggle("hidden-menu");
    document.querySelector(".opacity").classList.toggle("hidden");
});

var MBTIContainer = document.querySelector(".mbti");
MBTIContainer.addEventListener("click", function(){
    window.location.href = "www.google.com";
});