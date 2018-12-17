function myFunction () {
    var lenght1 = parseInt(document.getElementById("lenght1").value);
    var lenght2 = parseInt(document.getElementById("lenght2").value);
    var lenght3 = parseInt(document.getElementById("lenght3").value);
    var triangle=[lenght1,lenght2,lenght3];
    console.log( triangle);
    if (lenght1+lenght2 > lenght3 && lenght1+ lenght3>lenght2 && lenght2+lenght3>lenght1) {
    if (lenght1===lenght2 && lenght1===lenght3 && lenght2===lenght3) {
      console.log("Equilateral triangle ");
        alert("Equilateral triangle");
        }
        else if (lenght1===lenght2||lenght1===lenght3||lenght2===lenght3){
        console.log("Isoceles triangle");
        alert("Isoceles triangle"); 
        }
        else { 
        console .log ("Scalene triangle");
        alert("Scalene triangle");
        }
          }
         else  {
        console.log("Not a triangle");
        alert("Not a triangle"); 
        }
      };