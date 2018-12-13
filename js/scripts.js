function myFunction() {
    var firstString =document.getElementById("myNumber").value;
     alert(firstString);
}
var triangle=["lenght1","lenght2","lenght3"];
var lenght1=parseInt(prompt("enter lenght1"));
var lenght2=parseInt(prompt("enter lenght2"));
var lenght3=parseInt(prompt("enter lenght3"));
console.log([lenght1, lenght2,lenght3]);
function triangle(lenght1,lenght2,lenght3){
    return triangle(lenght1,lenght2,lenght3);
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