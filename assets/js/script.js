
var dropdown = document.querySelector(".navigator__dropdown");
var button = document.querySelector(".navigator__menu");

function menu(){
    if (dropdown.style.display ==="grid"){
        dropdown.style.display="none";
    }
        else {
            dropdown.style.display="grid";
        }
    }