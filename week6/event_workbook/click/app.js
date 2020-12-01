// make the box disapear when the user clicks it

const a = document.getElementsByClassName("red-box")
a[0].addEventListener("click", disapear, false);
function disapear(){
    const myobj = a[0].remove();
}
