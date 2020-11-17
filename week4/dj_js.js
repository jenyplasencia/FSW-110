// Adding an imagen as a background
document.body.style.backgroundImage = "url('./jeny+DJ.jpg')";
document.body.style.height = "100%";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "repeat-y";
document.body.style.backgroundPosition  = "center";

// Adding element <h1>
var newHone = document.createElement('h1'); 
newHone.textContent = '"DJ Jeny!!..."';
newHone.style.color = "red";
document.body.style.marginLeft = "75px";
newHone.style.fontSize = "55px";
newHone.style.familyFont = "TimesRoman";
document.body.prepend(newHone);



// Adding element <p>
var newParag = document.createElement("p"); 
newParag.textContent = 'Every weekend Jeny goes in the mix live on the radio! Power Down Playlist.';
newParag.style.fontFamily = "TimesRoman";
newParag.style.color = "White";
newParag.style.fontSize = '22px';
newParag.style.fontStyle = 'Italic';
document.body.style.marginLeft = "75px";
document.body.style.marginRight = "200px";
document.body.append(newParag);


// Adding element <p>
var secondParag = document.createElement("p"); 
secondParag.textContent = 'Celebrating beautiful electronic music and the best downtempo beats!!';
secondParag.style.fontFamily = "TimesRoman";
secondParag.style.color = "White";
secondParag.style.fontSize = '22px';
secondParag.style.fontStyle = 'Italic';
document.body.style.marginLeft = "75px";
document.body.style.marginRight = "200px";
document.body.append(secondParag);

// Adding element <p>
var package = document.createElement("p"); 
package.textContent = "Event Listeners: Lets change the color of the square...";
package.style.fontFamily = "TimesRoman";
package.style.color = "White";
package.style.fontSize = '22px';
document.body.append(package);


// Adding element <ol>
newOl = document.createElement("ol"); 
newOl.setAttribute ('id', 'Olist')
newOl.style.lineHeight = "2";
newOl.style.color = "White";
document.body.append(newOl);

var newLi = document.getElementById('Olist'); // first "item" my list.
var lista = document.createElement('li');
lista.textContent = 'For Blue: Hover over the square or press b.';                  
lista.style.fontFamily = "TimesRoman"; 
lista.style.fontSize = "22px";
lista.style.color = "White";
newLi.append(lista);

var newLi = document.getElementById('Olist'); // Second "item"  my list.
var lista = document.createElement('li');
lista.textContent = 'For Red: Held down the mouse button over the square or press r.';
lista.style.fontFamily = "TimesRoman";
lista.style.color = "White";
lista.style.fontSize = "22px";
newLi.append(lista);

var newLi = document.getElementById('Olist'); // Third "item" on my list.
var lista = document.createElement('li');
lista.textContent = 'For Yellow: Let go the mouse button over the square after you held down or press y.';
lista.style.fontFamily = "TimesRoman";
lista.style.color = "White";
lista.style.fontSize = "22px";
newLi.append(lista);

var newLi = document.getElementById('Olist'); // Fourh "item" on my list.
var lista = document.createElement('li');
lista.textContent = 'For Green: Doble click on the square or press g.';
lista.style.fontFamily = "TimesRoman";
lista.style.color = "White";
lista.style.fontSize = "22px";
newLi.append(lista);

var newLi = document.getElementById('Olist'); // Fifth "item" on my list.
var lista = document.createElement('li');
lista.textContent = 'For Orange: Just scroll the mouse somewhere or press o.';
lista.style.fontFamily = "TimesRoman";
lista.style.color = "White";
lista.style.fontSize = "22px";
newLi.append(lista);

// Adding element <div> and the square
var divi = document.createElement('div'); 
divi.setAttribute ('id', 'divis')
divi.style.marginLeft = "550px";
divi.style.height = "170px";
divi.style.width = "170px";
divi.style.backgroundColor = "#555";
document.body.append(divi);

// adding event listeners to the square.
document.getElementById('divis').onmouseover = function() {mouseOver()}; // Hover: blue
document.getElementById('divis').onmousedown = function() {onmousedown()}; // Held down: red
document.getElementById('divis').onmouseup = function() {onmouseup()}; // button up: yellow
document.getElementById('divis').ondblclick = function() {ondblclick()}; // Doble click: green
document.onwheel =function() {onwheel()}; // mouse scroll: Orange
document.addEventListener("keydown",function(event) {
    //using key (keycodes values)
    var keypressed=event.which;
    if (keypressed === 66) {
        mouseOver();
    }else if (keypressed === 82) {
        onmousedown();
    }else if (keypressed === 89) {
        onmouseup();
    }else if (keypressed === 71) {
        ondblclick();
    }else if (keypressed === 79) {
        onwheel();
    }

});


function mouseOver() {
  document.getElementById("divis").style.backgroundColor = "blue";
}

function onmousedown() {
  document.getElementById("divis").style.backgroundColor = "red";
}

function onmouseup() {
    document.getElementById("divis").style.backgroundColor = "yellow";
  }
  function ondblclick() {
    document.getElementById("divis").style.backgroundColor = "green";
  }
  
  function onwheel() {
    document.getElementById("divis").style.backgroundColor = "#FF6133";
  }

   
// Adding element footer
var foot = document.createElement('footer'); 
foot.setAttribute ('id', 'feet')
document.body.append(foot);

//Adding element <hr>
var newLineDivision = document.getElementById('feet'); 
var newHr = document.createElement("hr"); 
newHr.style.marginTop = "30px";
document.body.append(newHr);

// Adding element <span>
var newBottom = document.getElementById('feet'); 
var newSpan = document.createElement("span"); 
newSpan.style.color = "white";
newSpan.textContent = 'JENY PLASENCIA  -  WEBDEV360  -  FSW-110  - EVENT LISTENERS  -  DOM';
newSpan.style.fontFamily = "Arial";
newSpan.style.fontSize = '14px';
newSpan.style.marginLeft = "300px";
document.body.append(newSpan);




