function myFunction() {
    var lenght1 =document.getElementById("myNumber").value1;
    var lenght2=document.getElementById("myNumber").value2;
    var lenght3=document.getElementById("myNumber").value2;
     alert (lenght1,lenght2,lenght3);
      }
    if (lenght1==lenght2 && lenght1==lenght3 && lenght2==lenght3){
        console.log("Equilateral triangle");
        }
        else if (lenght1==lenght2||lenght1==lenght3||lenght2==lenght3){
        console.log("Isoceles triangle");
        }
        else if (lenght1+lenght2 > lenght3 && lenght1+ lenght3>lenght2 && lenght2+lenght3>lenght1) {
        console.log("Scalene triangle");
        }
        else {
        console.log("Not a triangle");
        }
    