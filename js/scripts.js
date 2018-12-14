function myFunction () {
    var lenght1 = parseInt(document.getElementById("lenght1").value);
    var lenght2 = parseInt(document.getElementById("lenght2").value);
    var lenght3 = parseInt(document.getElementById("lenght3").value);
    var triangle=[lenght1,lenght2,lenght3];
    console.log( triangle);
    if (lenght1+lenght2 > lenght3 && lenght1+ lenght3>lenght2 && lenght2+lenght3>lenght1) {

    if (lenght1===lenght2 && lenght1===lenght3 && lenght2===lenght3) {
        alert("Equilateral triangle");
        console.log("Equilateral triangle ");
        }
        else if (lenght1===lenght2||lenght1===lenght3||lenght2===lenght3){
        alert("Isoceles triangle"); 
        console.log("Isoceles triangle");
        }
        else {
        alert("Scalene triangle"); 
        console .log ("Scalene triangle");
        }
          }
         else  {
        alert("Not a triangle"); 
        console.log("Not a triangle");
        }
      };