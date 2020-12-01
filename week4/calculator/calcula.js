// Adding an imagen as a background
document.body.style.backgroundColor = "#014133";

// Adding element <h1>
var newHone = document.createElement('h1'); 
newHone.textContent = '"This is a Calculator"';
newHone.style.color = "white";
document.body.style.marginLeft = "400px";
newHone.style.fontSize = "50px";
newHone.style.familyFont = "TimesRoman";
document.body.prepend(newHone);

// Adding element <p> for an "introduction"
var newParag = document.createElement("p"); 
newParag.textContent = 'Welcome to "Calculator" choose from one of the following options...';
newParag.style.fontFamily = "TimesRoman";
newParag.style.color = "White";
newParag.style.fontSize = '22px';
newParag.style.fontStyle = 'Italic';
document.body.append(newParag);

// ADDING FIRST <div> ELEMENT
var divone = document.createElement('div'); 
divone.setAttribute ('id', 'divi1')
//divone.style.marginTop = "5px";
//divone.style.marginBottom = "20px";
//divone.style.paddingTop = "20px";
//divone.style.paddingBottom = "5px";
divone.style.border = '4px solid black'
divone.style.height = "240px";
divone.style.width = "650px";
divone.style.backgroundColor = "#b9f89c";
document.body.append(divone);

// Adding elements <p> inside first <div>
var para = document.getElementById('divi1'); 
var paragone = document.createElement("p"); 
paragone.style.marginLeft = '250px';
paragone.style.fontSize = '20px';
paragone.style.fontWeight = '800';
paragone.style.fontFamily = 'Verdana, sans-serif';
paragone.textContent = 'ADDITION';
paragone.style.color = "black";
document.getElementById('divi1').append(paragone);

// adding second element <p> inside first <div>
var paragtwo = document.createElement("p"); 
paragtwo.style.marginLeft = '100px';
paragtwo.style.fontSize = '18px';
paragtwo.style.fontWeight = '800';
paragtwo.style.fontFamily = 'Verdana, sans-serif';
paragtwo.textContent = 'Type your First Number :';
paragtwo.style.color = "black";
document.getElementById('divi1').append(paragtwo);

//adding <input> for first number 
var inp = document.getElementById('divi1'); 
var receiverOne = document.createElement("input"); 
receiverOne.style.marginLeft = '200px';
receiverOne.style.fontSize = '18px';
receiverOne.style.fontFamily = 'Verdana, sans-serif';
receiverOne.style.color = "black";
receiverOne.setAttribute ('id', 'addinputone')
document.getElementById('divi1').append(receiverOne);

// adding third element <p> inside first <div>
var paragThree = document.createElement("p"); 
paragThree.style.marginLeft = '100px';
paragThree.style.fontSize = '18px';
paragThree.style.fontWeight = '800';
paragThree.style.fontFamily = 'Verdana, sans-serif';
paragThree.textContent = 'Type your Second number:';
paragThree.style.color = "black";
document.getElementById('divi1').append(paragThree);

// adding second <input>
var inp = document.getElementById('divi1'); 
var receiverTwo = document.createElement("input"); 
receiverTwo.style.marginLeft = '200px';
receiverTwo.style.fontSize = '18px';
receiverTwo.style.fontFamily = 'Verdana, sans-serif';
receiverTwo.style.color = "black";
receiverTwo.setAttribute ('id', 'addinputtwo');
document.getElementById('divi1').append(receiverTwo);

// creating a buttom 
var btn = document.createElement("BUTTON");
btn.style.paddingLeft = '10px';
btn.style.marginLeft  = '10px';
btn.style.fontFamily = 'Times';
btn.style.fontWeight = '800';
btn.textContent = "Add Numbers";
btn.onclick = addnumber;
document.getElementById('divi1').append(btn);
/*
// adding forth <p> inside first <div>
var paragThree = document.createElement("p"); 
paragThree.style.marginLeft = '100px';
paragThree.style.fontSize = '18px';
paragThree.style.fontWeight = '800';
paragThree.style.fontFamily = 'Verdana, sans-serif';
paragThree.textContent = 'The Sum is: ';
paragThree.style.color = "black";
paragThree.setAttribute ('id', 'sumtotal');
document.getElementById('divi1').append(paragThree);*/

// ADDING SECOND <div> ELEMENT
var divtwo = document.createElement('div'); 
divtwo.setAttribute ('id', 'divi2')
//divtwo.style.paddingTop = "20px";
//divtwo.style.paddingBottom = "20px";
//divtwo.style.marginTop = "20px";
//divtwo.style.marginBottom = "20px";
divtwo.style.border = '4px solid black'
divtwo.style.height = "240px";
divtwo.style.width = "650px";
divtwo.style.backgroundColor = "#b9f89c";
document.body.append(divtwo);

// Adding elements <p> inside second <div>
var para = document.getElementById('divi1'); 
var paragone = document.createElement("p"); 
paragone.style.marginTop = '40px';
paragone.style.marginLeft = '200px';
paragone.style.fontSize = '20px';
paragone.style.fontWeight = '800';
paragone.style.fontFamily = 'Verdana, sans-serif';
paragone.textContent = 'MULTIPLICATION';
paragone.style.color = "black";
document.getElementById('divi1').append(paragone);

// addin second element <p> inside second <div>
var paragtwo = document.createElement("p"); 
paragtwo.style.marginLeft = '100px';
paragtwo.style.fontSize = '18px';
paragtwo.style.fontWeight = '800';
paragtwo.style.fontFamily = 'Verdana, sans-serif';
paragtwo.textContent = 'Type your First Number :';
paragtwo.style.color = "black";
document.getElementById('divi1').append(paragtwo);

//adding <input> for first number 
var inp = document.getElementById('divi1'); 
var receiverOne = document.createElement("input"); 
receiverOne.style.marginLeft = '200px';
receiverOne.style.fontSize = '18px';
receiverOne.style.fontFamily = 'Verdana, sans-serif';
receiverOne.style.color = "black";
receiverOne.setAttribute ('id', 'multinputone')
document.getElementById('divi1').append(receiverOne);

// addin third element <p> inside second <div>
var paragThree = document.createElement("p"); 
paragThree.style.marginLeft = '100px';
paragThree.style.fontSize = '18px';
paragThree.style.fontWeight = '800';
paragThree.style.fontFamily = 'Verdana, sans-serif';
paragThree.textContent = 'Type your Second number:';
paragThree.style.color = "black";
document.getElementById('divi1').append(paragThree);

// adding second <input>
var inp = document.getElementById('divi1'); 
var receiverTwo = document.createElement("input"); 
receiverTwo.style.marginLeft = '200px';
receiverTwo.style.fontSize = '18px';
receiverTwo.style.fontFamily = 'Verdana, sans-serif';
receiverTwo.style.color = "black";
receiverTwo.setAttribute ('id', 'multinputtwo');
document.getElementById('divi1').append(receiverTwo);

// creating a buttom to multiply
var btn = document.createElement("BUTTON");
btn.style.paddingLeft = '10px';
btn.style.marginLeft  = '10px';
btn.style.fontFamily = 'Times';
btn.style.fontWeight = '800';
btn.textContent = "Mult. Numbers";
btn.onclick = multiplynumber;
document.getElementById('divi1').append(btn);
/*
// adding third <p> inside second <div>
var paragThree = document.createElement("p"); 
paragThree.style.marginLeft = '100px';
paragThree.style.fontSize = '18px';
paragThree.style.fontWeight = '800';
paragThree.style.fontFamily = 'Verdana, sans-serif';
paragThree.textContent = 'The Product is: ';
paragThree.style.color = "black";
paragThree.setAttribute ('id', 'multotal');
document.getElementById('divi1').append(paragThree);*/

// ADDING THIRD <div> ELEMENT 
var divthree = document.createElement('div'); 
divthree.setAttribute ('id', 'divi3')
//divthree.style.marginTop = "20px";
//divthree.style.paddingTop = "40px";
//divthree.style.paddingBottom = "20px";
divthree.style.border = '4px solid black'
divthree.style.height = "240px";
divthree.style.width = "650px";
//divthree.style.margingBottom = "40px";
divthree.style.backgroundColor = "#b9f89c";

document.body.append(divthree);

// Adding elements <p> inside third <div>
var para = document.getElementById('divi1'); 
var paragone = document.createElement("p"); 
paragone.style.marginTop = '40px';
paragone.style.marginLeft = '220px';
paragone.style.fontSize = '20px';
paragone.style.fontWeight = '800';
paragone.style.fontFamily = 'Verdana, sans-serif';
paragone.textContent = 'DIVISION';
paragone.style.color = "black";
document.getElementById('divi1').append(paragone);

// adding second element <p> inside third <div>
var paragtwo = document.createElement("p"); 
paragtwo.style.marginLeft = '100px';
paragtwo.style.fontSize = '18px';
paragtwo.style.fontWeight = '800';
paragtwo.style.fontFamily = 'Verdana, sans-serif';
paragtwo.textContent = 'Type your First Number :';
paragtwo.style.color = "black";
document.getElementById('divi1').append(paragtwo);

//adding <input> for first number 
var inp = document.getElementById('divi1'); 
var receiverOne = document.createElement("input"); 
receiverOne.style.marginLeft = '200px';
receiverOne.style.fontSize = '18px';
receiverOne.style.fontFamily = 'Verdana, sans-serif';
receiverOne.style.color = "black";
receiverOne.setAttribute ('id', 'divinputone')
document.getElementById('divi1').append(receiverOne);

// addin third element <p> inside third <div>
var paragThree = document.createElement("p"); 
paragThree.style.marginLeft = '100px';
paragThree.style.fontSize = '18px';
paragThree.style.fontWeight = '800';
paragThree.style.fontFamily = 'Verdana, sans-serif';
paragThree.textContent = 'Type your Second number:';
paragThree.style.color = "black";
document.getElementById('divi1').append(paragThree);

// adding second <input>
var inp = document.getElementById('divi1'); 
var receiverTwo = document.createElement("input"); 
receiverTwo.style.marginLeft = '200px';
receiverTwo.style.fontSize = '18px';
receiverTwo.style.fontFamily = 'Verdana, sans-serif';
receiverTwo.style.color = "black";
receiverTwo.setAttribute ('id', 'divinputtwo');
document.getElementById('divi1').append(receiverTwo);

// creating a buttom to division
var btn = document.createElement("BUTTON");
btn.style.paddingLeft = '10px';
btn.style.marginLeft  = '10px';
btn.style.fontFamily = 'Times';
btn.style.fontWeight = '800';
btn.textContent = "Div. Numbers";
btn.onclick = dividnumber;
document.getElementById('divi1').append(btn);
/*
// adding third <p> inside third <div>
var paragThree = document.createElement("p"); 
paragThree.style.marginLeft = '100px';
paragThree.style.fontSize = '18px';
paragThree.style.fontWeight = '800';
paragThree.style.fontFamily = 'Verdana, sans-serif';
paragThree.textContent = 'The Result is: ';
paragThree.style.color = "black";
paragThree.setAttribute ('id', 'divtotal');
document.getElementById('divi1').append(paragThree);*/

/*
//showing result from the operation
var resulta = document.createElement("p"); 
resulta.style.marginTop = '20px';
resulta.style.marginLeft = '100px';
resulta.style.fontSize = '18px';
resulta.style.fontWeight = '800';
resulta.style.fontFamily = 'Verdana, sans-serif';
resulta.textContent = 'The Result is: ';
resulta.style.color = "White";
resulta.setAttribute ('id', 'dividnumber');
//document.body.append(resulta);
document.getElementById('divi1').append(resulta);*/


//RESULTS OF OPERATIONS
// adding third <p> inside third <div>
var paragThree = document.createElement("p"); 
paragThree.style.marginLeft = '100px';
paragThree.style.fontSize = '18px';
paragThree.style.fontWeight = '800';
paragThree.style.fontFamily = 'Verdana, sans-serif';
paragThree.textContent = 'The Result is: ';
paragThree.style.color = "black";
paragThree.setAttribute ('id', 'divtotal');
paragThree.document.append(paragThree);
//document.getElementById('divi1').append(paragThree);



// Addition Function
function addnumber() {
    var inputaddone = document.getElementById('addinputone').value;
    var inputaddtwo = document.getElementById('addinputtwo').value;
    var inputaddoneinteger = parseInt(inputaddone, 10);
    var inputaddtwointeger = parseInt(inputaddtwo, 10);
    var addtotal = inputaddoneinteger+inputaddtwointeger;
    document.getElementById('sumtotal').textContent = "The SUM is: "+ addtotal;
    
}
// Multiplication function
function multiplynumber() {
    var inputmulone = document.getElementById('multinputone').value;
    var inputmultwo = document.getElementById('multinputtwo').value;
    var inputmuloneinteger = parseInt(inputmulone, 10);
    var inputmultwointeger = parseInt(inputmultwo, 10);
    var multotal = inputmuloneinteger * inputmultwointeger;
    document.getElementById('multotal').textContent="The Product is: "+multotal;
    
}
// division function
function dividnumber() {
  var inputdivone = document.getElementById('divinputone').value;
  var inputdivtwo = document.getElementById('divinputtwo').value;
  var inputdivoneinteger = parseInt(inputdivone, 10);
  var inputdivtwointeger = parseInt(inputdivtwo, 10);
  var divitotal = inputdivoneinteger / inputdivtwointeger;
  document.getElementById('divtotal').textContent="The Result is: "+ divitotal;
  
}
 
// Adding element footer
var foot = document.createElement('footer'); 
foot.setAttribute ('id', 'feet')
foot.style.paddingBottom = "20px";
document.body.append(foot);

// Adding element <span>
var newBottom = document.getElementById('feet'); 
var newSpan = document.createElement("span"); 
newSpan.style.marginLeft = "100px";
newSpan.style.color = "white";
newSpan.textContent = 'JENY PLASENCIA  -  WEBDEV360  -  FSW-110  - CALCULATOR  -  DOM';
newSpan.style.fontFamily = "Times";
newSpan.style.fontSize = '14px';
document.body.append(newSpan);


