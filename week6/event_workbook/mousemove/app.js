

var eleme = document.getElementsByClassName("red-box");
eleme[0].addEventListener("mousemove",showCoords);
    
    function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
eleme[0].innerHTML = coor;
    }

document.getElementsByClassName("red-box");
eleme[0].addEventListener("mouseout", clearCoor);
    function clearCoor() {
eleme[0].innerHTML = " ";
}