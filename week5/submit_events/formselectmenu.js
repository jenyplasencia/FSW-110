function myTravel() {
  var a = document.getElementById("firstName").value;
  var b = document.getElementById("lastName").value;
  var c = document.getElementById("age").value;
  var d = document.myForm.gender.value;
  var e = document.myForm.pais.value;
  var g = document.getElementsByName("diet");
  var checkedDiet = [];
  for(let i = 0; i < g.length; i++){
    if(g[i].checked){
        checkedDiet.push(g[i].value);   
    }
  }
  var checkDietresolve;
      checkDietresolve = checkedDiet.toString();


alert("First Name:" + " " + a +"\n" + "Last Name:" + " " + b +"\n" +"Age:" + " " + c +"\n" + "Gender:" + " " + d +"\n" + "Location:" + " " + e
+ "\n" + "Dietary Restrictions:" + " " + checkDietresolve);
} 