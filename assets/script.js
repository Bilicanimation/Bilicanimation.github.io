let input = document.getElementsByTagName("input")[0];

input.addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;
    if (key === 13) {
        let search = input.value.replace("%", "%25").replace("@", "%40").replace("#", "%23").replace("$", "%24").replace("&", "%26").replace("=", "%3D").replace("+", "%2B");
        location = "https://www.google.com/search?client=firefox-b-d&q=" + search;
    }
});

//document.getElementsByTagName("img")[0].ondragstart = function() {return false;};

//regulating background image size and position
let body = document.getElementsByTagName("body")[0]
let width = window.screen.width
body.style["background-size"] = String(width) + "px"

body.style["background-position-x"] = String((body.offsetWidth - width)/2) + "px"
window.onresize = function() {
    body.style["background-position-x"] = String((body.offsetWidth - width)/2) + "px"
    body.style["background-size"] = String(width) + "px"
}

//input position
input.style["margin-top"] = width/5 + 100
