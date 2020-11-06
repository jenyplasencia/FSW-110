/*// Step 2: Creating h1 with Hello World (Once).
        var newHone = document.createElement('h1'); 
        newHone.textContent = '"Hello World"';
        document.body.prepend(newHone);*/ 

     
/*// Step3 : Creating a for loop adding 10 times h1 with Hello World.
// Step4: Adding some style to h1.
for (i = 0; i < 10; i ++){
    var newHone = document.createElement('h1'); 
    newHone.textContent = '"Hello World"';
    document.body.style.marginLeft = "200px";
    newHone.style.fontSize = "25px";
    newHone.style.fontStyle = "Italic";
    newHone.style.familyFont = "Times";
    document.body.prepend(newHone)
}*/

// Step5: Create a new array using the following information...
// This is an Aray of an Array.. and we are going to read throught it....

   const allNames = [
    ['steve', 'larry'],
    ['joe', 'shirley'],
    ['steph', 'nate'],
    ['rick', 'emily']
]

// Step6: Create a loop that iterates through he array in Step 5...

    // Creating a list with names from array
    var newOl = document.createElement("ol"); 
    newOl.setAttribute ('id', 'Olist')
    newOl.style.lineHeight = "2";
    document.body.append(newOl);
    
 for ( var i = 0; i < allNames.length; i ++ ){
     for (var a = 0; a < allNames[i].length; a ++){
        var newLi = document.getElementById('Olist'); 
        var lista = document.createElement('li');
        lista.textContent = allNames[i][a];                  
        lista.style.fontFamily = "TimesRoman";
        lista.style.fontSize = "22px";
        newLi.append(lista);
     }

 }
   

/*
 
 
 for (i = 0; i < allNames.length; i++) {
        for (var inDex = 0; inDex < allNames[i].length; inDex ++){
            newOl += "<li>" + allNames[i] + "</li>";
            console.log(ll);
            document.body.append(newOl);
        }
            newOl += "</ol>";
    }
    
    
   
   
   /*for (var i = 0; i < allNames.length; i ++){
 
        var newLi = document.getElementById('Olist'); 
        var lista = document.createElement('li');
        lista.textContent = allNames[i];                  
        lista.style.fontFamily = "TimesRoman";
        lista.style.fontSize = "22px";
        newLi.append(lista);
    }*/



