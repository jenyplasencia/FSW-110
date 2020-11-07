// Step2 : Creating 5 h2 elements using for loop.
// Step3: Adding style.1.

for (var i = 0; i < 5; i ++){
    var newHtwo = document.createElement("h2");
    var borDer = newHtwo.classList.add('border');
    newHtwo.textContent = '"Styles and Classes using JS."';
    document.body.style.marginLeft = "200px";
    newHtwo.style.fontSize = "20px";
    newHtwo.style.fontWeight = "lighter";
    newHtwo.style.fontFamily = "sans-serif";
    newHtwo.style.color = "cornflowerblue";
    document.body.append(newHtwo);
    
    }
    