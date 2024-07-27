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
// the part below is for loading tests
function loadTest(testName){
    $(".test-name").hide();
    $("#" + testName + "Test").removeClass("hidden");
}

$(".test-name").on("click", function(){
    loadTest($(this).attr("id"));
});

//the code below is for loading the home of the site.

$(".homeButton").on("click", function(){
    window.location.reload();
});