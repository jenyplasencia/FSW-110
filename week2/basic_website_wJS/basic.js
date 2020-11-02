// Adding an imagen as a background
document.body.style.backgroundImage = "url('./Featured Cuba Beaches.jpg')";
document.body.style.height = "100%";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "repeat-y";
document.body.style.backgroundposition  = "center";

// Adding element <h1>
var newHone = document.createElement('h1'); 
newHone.textContent = '"Olala Destinations..."';
document.body.style.marginLeft = "200px";
newHone.style.fontSize = "55px";
newHone.style.familyFont = "TimesRoman";
document.body.prepend(newHone);

// Adding element <div> for a navbar.
var navBar = document.createElement('div'); 
navBar.setAttribute ('id', 'navega')
document.body.append(navBar);


var newBuscaNav = document.getElementById('navega'); // "HOME" link.
var newHome = document.createElement('a');
newHome.textContent = 'HOME'; 
newHome.href="https://en.wikipedia.org/wiki/Barbados";
newHome.style.fontFamily = "Arial Black";
newHome.style.fontSize = "17px";
newHome.style.padding = "5px";
newHome.style.marginLeft= "750px";
newBuscaNav.append(newHome);


var aboutUs = document.createElement('a'); //ABOUT US link.
aboutUs.textContent = 'ABOUT_US'; 
aboutUs.href="https://en.wikipedia.org/wiki/Barbados";
aboutUs.style.fontFamily = "Arial Black";
aboutUs.style.fontSize = "17px";
aboutUs.style.padding = "5px";
aboutUs.style.marginLeft= "10px";
newBuscaNav.append(aboutUs);


var specials = document.createElement('a'); // SPECIALS link
specials.textContent = 'SPECIALS'; 
specials.href="https://en.wikipedia.org/wiki/Barbados";
specials.style.fontFamily = "Arial Black";
specials.style.fontSize = "17px";
specials.style.padding = "5px";
specials.style.marginLeft= "10px";
newBuscaNav.append(specials);

// Adding element <p>
var newParag = document.createElement("p"); 
newParag.textContent = 'For more than 40 years, Olala Destinations... has been planning impeccable custom trips to destinations that require extensive planning. “Excellent itineraries,” enthusiastic guides and unflappable, knowledgeable drivers.';
newParag.textContent = 'Olala destinations... plans customized private journeys packed with five-star-hotel stays and insider experiences in dozens of countries. Trips are tailored to suit travelers’ interests, including food, photography, genealogy, gardens, adventure, and more. “The itineraries are always the perfect balance of famous highlights, off-the-beaten-track spots, and special behind-the-scenes experiences,” one World’s Best voter wrote. “They’re also exceptionally good with organizing family travel, and everyone from the grandparents to the grandchildren always has such a great time.';
newParag.style.fontFamily = "TimesRoman";
newParag.style.fontSize = '22px';
newParag.style.fontStyle = 'Italic';
newParag.style.lineHeight = "2";
document.body.style.marginLeft = "200px";
document.body.style.marginRight = "200px";
document.body.append(newParag);

// Adding element <p>
var package = document.createElement("p"); 
package.textContent = "Tourist Package";
package.style.fontFamily = "TimesRoman";
package.style.fontSize = '22px';
document.body.append(package);


// Adding element <ol>
newOl = document.createElement("ol"); 
newOl.setAttribute ('id', 'Olist')
newOl.style.lineHeight = "2";
document.body.append(newOl);

var newLi = document.getElementById('Olist'); // first "item" my list.
var lista = document.createElement('li');
lista.textContent = 'For Individual : Include Hotel and Visit around the city.';                  
lista.style.fontFamily = "TimesRoman";
lista.style.fontSize = "22px";
newLi.append(lista);

var newLi = document.getElementById('Olist'); // Second "item"  my list.
var lista = document.createElement('li');
lista.textContent = 'For Groups : Include Hotel and Visit around the city.';
lista.style.fontFamily = "TimesRoman";
lista.style.fontSize = "22px";
newLi.append(lista);

var newLi = document.getElementById('Olist'); // Third "item" on my list.
var lista = document.createElement('li');
lista.textContent = 'For Families : Include Hotel and Visit around the city.';
lista.style.fontFamily = "TimesRoman";
lista.style.fontSize = "22px";
newLi.append(lista);

// Adding element footer
var foot = document.createElement('footer'); 
navBar.setAttribute ('id', 'feet')
document.body.append(foot);

//Adding element <hr>
var newLineDivision = document.getElementById('feet'); 
var newHr = document.createElement("hr"); 
newHr.style.marginTop = "80px";
document.body.append(newHr);

// Adding element <span>
var newBottom = document.getElementById('feet'); 
var newSpan = document.createElement("span"); 
newSpan.textContent = 'Jeny Plasencia  -  WebDev360  -  fsw-1100  -  DOM';
newSpan.style.fontFamily = "Arial";
newSpan.style.fontSize = '14px';
newSpan.style.marginLeft = "300px";
document.body.append(newSpan);




