let input = document.getElementsByTagName("input")[0];
input.addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;
    if (key === 13) {
        let search = input.value.replace("%", "%25").replace("@", "%40").replace("#", "%23").replace("$", "%24").replace("&", "%26").replace("=", "%3D").replace("+", "%2B");
        location = "https://www.google.com/search?client=firefox-b-d&q=" + search;
    }
});
