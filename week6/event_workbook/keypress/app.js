/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */



window.addEventListener("keydown", codeKey);
var a = document.querySelectorAll('type');
function codeKey(event) {
    var key = event.which;
    document.getElementById("output").innerHTML = "The KEY Code code is: " + key;  
}






