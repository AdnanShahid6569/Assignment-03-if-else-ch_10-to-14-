// Chapter 10 

// Questions

// q 01
// var city = prompt("Your City Name")

// if(city === "Karachi" ){
//     console.log("Welcome to City of Crime");
    
// }

// // q 02
// var message;

// var gender = prompt("Gender")

// if(gender == "Male"){
//    message = "Good Morning Sir";
    
// }
// else if (gender === "Female") {
//     message = "Good Morning Madam";
// }
// else{
// message = ("Please enter your gender");
// }
// console.log(message);


// // q 03
// var traffic;

// var signal = prompt("Traffic Signal")

// if(signal === "red"){
//     traffic = "Must Stop";
// }
// else if(signal === "yellow"){
//     message = "Ready to Move";

// }
// else if (signal === "green"){
//     traffic = "Mve Now";
// }
// else{
//     traffic = "Wait of"
// }
// console.log(traffic);

// // q 04
// var fuel = prompt("Remaining fuel in car liter")

// if (fuel < .25){
//     console.log("Please refill the fuel in your car");
    
// }

// // q 05
// var a = 4;

// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  var b = 82;

// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//  var c = 12;

// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
// alert("condition 2 is true");
// }

// if (++c < 14){
// alert("condition 3 is False");
// }

// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 20000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }

// if (false){
// alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// q 05

var result;
var  total = 300;

var obtain = prompt("300 out of")
if (obtain <= total && obtain <=300){
    document.write("Obtain Marks: " + obtain + "%")
    result = obtain*total/100;
    document.write("Percentage: " + result + "%")
}
// else if(obtain <=300){
    
// }
else if(result >=80){
  document.write("Grade: A-one")
  document.write("Remarks: Exellent")
}
else if (result >= 70){
    alert("Grade: B")
  document.write("Remarks: Good")

}
else if(result < 60){
    alert("Grade: Fail")
  document.write("Remarks: Sorry")

}

else{
    alert("Enter Number")
}

// 
