var menuButton = document.querySelector(".menubutton");
var menu = document.querySelector(".menu");
menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("rotated");
    menu.classList.toggle("hidden-menu");
    if(document.querySelector(".opacity").classList.contains("hidden")){
        document.querySelector(".opacity").classList.remove("hidden");
        void document.querySelector(".opacity").offsetWidth;

        document.querySelector(".opacity").classList.add("opacityy");
        document.querySelector(".opacity").addEventListener("click", function(){
            document.querySelector(".opacity").classList.remove("opacityy");
            document.querySelector(".opacity").addEventListener("transitionend", function(){
                document.querySelector(".opacity").classList.add("hidden");
            }, { once: true });
            menuButton.classList.toggle("rotated");
            menu.classList.toggle("hidden-menu");

        }, { once: true });
    }else{
        
        document.querySelector(".opacity").classList.remove("opacityy");
        document.querySelector(".opacity").addEventListener("transitionend", function(){
            document.querySelector(".opacity").classList.add("hidden");
        }, { once: true });
        document.querySelector(".opacity").addEventListener("click", function(){
            document.querySelector(".opacity").classList.remove("opacityy");
            document.querySelector(".opacity").addEventListener("transitionend", function(){
                document.querySelector(".opacity").classList.add("hidden");
            }, { once: true });
            menuButton.classList.toggle("rotated");
            menu.classList.toggle("hidden-menu");
            
        }, { once: true });
        
    }
});

var MBTIContainer = document.querySelector(".mbti");
MBTIContainer.addEventListener("click", function(){
    window.location.href = "https://www.google.com";
});