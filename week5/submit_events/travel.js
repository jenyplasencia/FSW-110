
function myTravel() {
    var a = document.getElementById("firstName").value;
    var b = document.getElementById("lastName").value;
    var c = document.getElementById("age").value;
    var d = document.myForm.gender.value;
    var f = document.getElementsByName("pais");
    var checkedPais = [];
        for(let i = 0; i < f.length; i++){
            if(f[i].checked){
                checkedPais.push(f[i].value);   
            }
        }
    var checkPaisresolve;
    checkPaisresolve = checkedPais.toString();

   
   var g = document.getElementsByName("diet");
   var checkedDiet = [];
   for(let i = 0; i < g.length; i++){
       if(g[i].checked){
           checkedDiet.push(g[i].value);   
       }
   }
var checkDietresolve;
checkDietresolve = checkedDiet.toString();

    alert("First Name:" + " " + a +"\n" + "Last Name:" + " " + b +"\n" +"Age:" + " " + c +"\n" + "Gender:" + " " + d +"\n" + "Destination:" + " " + checkPaisresolve
    + "\n" + "Dietary Restrictions:" + " " + checkDietresolve);
}   