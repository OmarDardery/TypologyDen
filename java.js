var menuButton = document.querySelector(".menubutton");
var menu = document.querySelector(".menu");
menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("rotated");
    menu.classList.toggle("hidden-menu");
    if(document.querySelector(".opacity").classList.contains("hidden")){
        document.querySelector(".opacity").classList.toggle("hidden");
        document.querySelector(".opacity").classList.toggle("opacityy");

    }else{
        
        document.querySelector(".opacity").classList.toggle("opacityy");
        document.querySelector(".opacity").addEventListener("transitionend", function(){
            document.querySelector(".opacity").classList.toggle("hidden");
        });
        
    }

});

var MBTIContainer = document.querySelector(".mbti");
MBTIContainer.addEventListener("click", function(){
    window.location.href = "https://www.google.com";
});