var menuBtn = document.getElementById("menu-btn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-25%"

menuBtn.onclick = function () {
    if (sideNav.style.right == "-25%") {
        sideNav.style.right = "0%";
    }
    else {
        sideNav.style.right = "-25%"

    }
}