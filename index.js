var menuButton = $(".menubutton");
var menu = $(".menu");
var opacity = $(".opacity");

menuButton.on("click", function() {
    menuButton.toggleClass("rotated");
    menu.toggleClass("hidden-menu");

    if (opacity.hasClass("hidden")) {
        opacity.removeClass("hidden");
        void opacity[0].offsetWidth; // Trigger a reflow

        opacity.addClass("opacityy");
        opacity.one("click", function() {
            opacity.removeClass("opacityy");
            opacity.one("transitionend", function() {
                opacity.addClass("hidden");
            });
            menuButton.toggleClass("rotated");
            menu.toggleClass("hidden-menu");
        });
    } else {
        opacity.removeClass("opacityy");
        opacity.one("transitionend", function() {
            opacity.addClass("hidden");
        });
        opacity.one("click", function() {
            opacity.removeClass("opacityy");
            opacity.one("transitionend", function() {
                opacity.addClass("hidden");
            });
            menuButton.toggleClass("rotated");
            menu.toggleClass("hidden-menu");
        });
    }
});
// the part above is for the menu functionality
// the part below is for the rest
