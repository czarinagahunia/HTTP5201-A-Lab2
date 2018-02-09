//######## LAB 1########
function init() {
    "use strict";
    var btnlogin = document.getElementById("login__submit");
    function check() {
        var u = document.getElementById("login__username");
        var p = document.getElementById("login__password");
        var disUser = document.getElementById("value__username");
        var disPass = document.getElementById("value__password");
        var show = document.getElementById("value");
        show.style.display = "block";
        if (u.value === "" || u.value === null) {
            u.style.backgroundColor = "red";
            u.focus();
        } else {
            disUser.innerHTML = u.value;
            u.style.backgroundColor = "none";
            u.blur();
        }
        if (p.value === "" || p.value === null) {
            p.style.backgroundColor = "red";
            p.focus();
        } else {
            disPass.innerHTML = p.value;
            p.style.backgroundColor = "none";
            p.blur();
        }
        return false;
    }
    btnlogin.onclick = check;
}
window.onload = init;