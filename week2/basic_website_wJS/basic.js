var newHone = document.createElement('h1'); // adding element <h1>
newHone.textContent = '"Welcome to my JS site"';
newHone.style.familyFont = "TimesRoman";
document.body.prepend(newHone);

var newParag = document.createElement("p"); // adding element <p>
newParag.textContent = 'All of this was created with JavaScript';
newParag.style.fontFamily = "TimesRoman";
newParag.style.fontSize = '20px';
newParag.style.fontStyle = 'Italic';
document.body.append(newParag);

newOl = document.createElement("ol"); // adding element <ol>
newOl.setAttribute ('id', 'Olist')
document.body.append(newOl);

var newLi = document.getElementById('Olist'); // adding <li> including text.
var lista = document.createElement('li');
lista.textContent = 'Uno';
lista.style.fontFamily = "TimesRoman";
lista.style.fontSize = "17px";
newLi.append(lista);

var newLi = document.getElementById('Olist');
var lista = document.createElement('li');
lista.textContent = 'Dos';
lista.style.fontFamily = "TimesRoman";
lista.style.fontSize = "17px";
newLi.append(lista);

var newLi = document.getElementById('Olist');
var lista = document.createElement('li');
lista.textContent = 'Tres';
lista.style.fontFamily = "TimesRoman";
lista.style.fontSize = "17px";
newLi.append(lista);







