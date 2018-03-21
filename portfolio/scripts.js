$(document).ready(function () {
    $("#social-links").find("a").addClass("mx-3");
    $("ul#navButtons").find("li").find("a").addClass("p-4").addClass("mx-1");
    $(".scrollButton").click(function () {
        var x = -1; //y axis displacement
        var y = 1; //delay in milliseconds

        var someID = setInterval(function () {
            window.scrollBy(0, x);
            //x = x - 1;
        }, y);

        setTimeout(function () {
            clearInterval(someID);
        }, 350)

        $(".navbar-collapse").collapse("toggle");
    });
    $("#socialButton").click(function () {
        $(".navbar-collapse").collapse("toggle");
    })
});