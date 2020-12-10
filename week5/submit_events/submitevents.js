function myTravel() {
  var a = document.getElementById("firstName").value;
  var b = document.getElementById("lastName").value;
  var c = document.getElementById("age").value;
  var d = document.myForm.gender.value;
  var f = document.getElementsByName("pais");


  

  alert("First Name:" + " " + a +"\n" + "Last Name:" + " " + b +"\n" +"Age:" + " " + c +"\n" + "Gender:" + " " + d );
}  