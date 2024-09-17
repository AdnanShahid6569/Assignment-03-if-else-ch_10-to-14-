// Chapter 10 (If Statement)

// Questions

// q 01
var city = "Karachi";

if (city == "Karachi"){
    console.log("Karachi The City of Light");
    
}

// q 02
var x,y,z;
if (x === y){
  z = prompt("Enter Z Value")
    
}
console.log(z);

// q 03
var zipCode = "10010";

if(zipCode == "10010"){
    alert("Karachi")
}
else{
    alert("Please right Correct City")
}

// q 04
var x = 1;

if (x == 1){
    x = 5;
    console.log(x);
    
}

console.log("===== Comparison Operators =====");

// Chapter 11 (Commparison Operators)

// q 01
var a = 10 , b = 11;

if(a != b){
    console.log(true);
    
}
else{
    console.log(false);
    
}

// q 02
var num1 = 20 , num2 = 20;

if (num1 >= num2){
    console.log(true);
}
else{
    console.log(false);
    
}

// q 03
var aa = 15;

if(aa === 20){
    console.log(true);
    
}
else{
    console.log(false);
    
}

// q 04
if(50 != 20){
    
    alert("Congratulations")
}

// q 05
var name = "Shahid"
var firstName = prompt("Enter firstName")

if(firstName != name){
    alert("No Match")
}

console.log("== (if…else and else if statements) ==");


// Chapter 12  (if…else and else if statements) 

// q 01
var first = 70 , second = 68;

if(first >= second){
    alert("Condition is true")
}
else{
    alert("Condition is False")
}

// q 02
var percentage = prompt("Enter Percentage Based Grade A/C")

if (percentage >=70 && percentage <=100){
    console.log("Your Grade is A");
}
else if(percentage <=50 && percentage >=33){
    console.log("Your Grade is C");
    
}
else if (percentage <= 32 && percentage >=1){
    console.log("YOur Grade is Fail");
    
}
else{
    console.log("Invalid Percentage");
    
}

// q 03
var a = "10";

if (a === "10"){
    alert("a is 10")
}
if(a === "12" ){
alert("The Correct Value of a is 10")
}

// q 04

var userCity = prompt("Enter City")

if(userCity == "Karachi"){
    alert("Acknowledging it is Karachi.")
}
else if(userCity == "lahore"){
    alert("check to see if its Lahore.")
}
else if(userCity == "Lahore"){
    alert("Acknowledging it is Lahore.")

}
else if(userCity == ""){
    alert("Not a City")
}

console.log("(Testing sets of conditions)");


// Chater 13 (Testing sets of conditions)

// q 01

var a = 10 , b = 10 , c = 12 , d = 12;

if(a == b && c == d){
    console.log(true);
}

// q 02

var a = 20 , b = 20 , c = 21 , d = 23;

if(a == b && c != d){
    console.log(true);
    
}

// q 03
var h = "Hamza or Adnan";

var age = 50;
if( h === h && age < 60 ){
    console.log(true);
}
else{
    console.log(false);
    
}

// q 04

var one = 4 , two = 7;

if(one < two){
    console.log("one Less than two");
    
}
else if(two > one){
    console.log("Two Greater than one");
    
}

// q 05
var first_name = "Adnan" , lastName = "Shahid";

var name = prompt("Enter Full Name")

if(name == first_name + lastName){
    alert("Your Full Name is AdnanShahid")
}


// Chapter 14 (If statements nested)

var password = 2 ;

if(password){
    alert("Password is not empty")
    if(password > 5){
        alert("Password must be greater than 5")
    }
    alert("Okkkkkk")
}


// q 02
var a = 1 , c = "Max";

if(a === 1 ){
    if(c === "Max"){
        alert("OK")
    }
}

// q 03

var aa = 30 , bb = 20 , cc = "Max" , dd = 15;

if(aa === 30 && bb < 40 ){
    if(c === "Max" || dd >= 10){
        alert("Thik he Ok")
    }
}

// q 04
var num = 20 , num2 = 20;

if(num == num2){
    if(num <= num2){
        alert("=== The End ===")
    }
}






