// Chapter 10 

// Questions

// q 01
var city = prompt("Your City Name")

if(city === "Karachi" ){
    console.log("Welcome to City of Crime");

}

// // q 02
var message;

var gender = prompt("Gender")

if(gender == "Male"){
   message = "Good Morning Sir";

}
else if (gender === "Female") {
    message = "Good Morning Madam";
}
else{
message = ("Please enter your gender");
}
console.log(message);


// // q 03
var traffic;

var signal = prompt("Traffic Signal")

if(signal === "red"){
    traffic = "Must Stop";
}
else if(signal === "yellow"){
    message = "Ready to Move";

}
else if (signal === "green"){
    traffic = "Mve Now";
}
else{
    traffic = "Wait of"
}
console.log(traffic);

// q 04
var fuel = prompt("Remaining fuel in car liter")

if (fuel < .25){
    console.log("Please refill the fuel in your car");

}

// // q 05
var a = 4;

if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;

if (b++ === 83){
alert("given condition for variable b is true");
}

 var c = 12;

if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is False");
}

if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 20000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}

if (false){
alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
    }

// q 05
var percentage;

var total = +prompt("THree Subjects Total Number")
var obtain = +prompt("Three Subjects Obtain Number")

if (total === 300) {
  document.write(`Total Marks: ${total} <br>`)

  if (obtain <= total) {
    document.write(`Obtain Marks: ${obtain} <br>`)
    percentage = obtain / total * 100;
    document.write(`Percentage: ${percentage}% <br>`)

    if (percentage >= 80) {
      document.write(`Grade: A-one <br>`)
      document.write(`Remarks: Exellent <br>`)
    }
    else if (percentage >= 70) {
      document.write(`Grade: A <br>`)
      document.write(`Remarks: Good <br>`)
    }
    else if (percentage >= 60) {
      document.write(`Grade: B <br>`)
      document.write(`Remarks: You Need to improve <br>`)
    }

    else if (percentage < 60) {
      document.write(`Grade: Fail <br>`)
      document.write(`Remarks: Work Hard <br>`)
    }

  }
}
else{
  alert(`Invaild Number`)
}

// q 06

var secret = 10;

var guess = prompt("Guess Secret Number")

if(guess <= secret && guess >1){
  alert("Bingo Correct answer")
}
else if(guess == 1){
  alert("Close enough to the correct answer")

}

// q 07
var divide = prompt("divide by 3..")

if(divide%3 === 0){
    result = divide/3;
    console.log("yeah");
    
}
else{
    console.log('NO')
}



// q 08
var num = prompt("Even or Odd Number..")

if(num%2 === 0){
  console.log("Odd");
  
}
else{
  console.log("Even");
  
}

// // q 09
var T = prompt("Criteria Check..")

if(T > 40){
  console.log("it is too hot outside");
  
}
else if(T  > 30){
  console.log("The weather today is normal");

}
else if (T > 20){
  console.log("Today's Weather is cool");
  
}
else if(T >10){
  console.log("OMG Today's Weather is so cool");
  
}
else{
  console.log("Input Criteria");
  
}

// q 10
var num1 = prompt("Enter First Number")
var num2 = prompt("Enter Second Number")
var operater = prompt("+ , - , * , / %")

var result;
if(operater === "+"){
  result = num1 + num2;
}
else if(operater === "-"){
  result = num1 - num2;

}
else if(operater === "*"){
  result = num1 * num2;
} 
else if(operater === "/"){
  if(num2 != 0){
    result = num1 / num2;
  }
  else{
    alert("Error: Not allowed Divide by 0")
  }
}
else if(operater === "%"){
  result = num1 % num2;
}
else{
  alert("Invalid")
}
alert(result);


// Chapter 12 to 13

// q 01
// Not Understand

// q 02
var num1 = prompt("Enter Frst Number")
var num2 = prompt("Enter Second Number")

if(num1 > num2){
  alert( `${num1} This is the larger Number ${num2}`)
}
else if(num2 >num1){
  alert( `${num2} This is the larger Number  ${num1}`)

}

else{
  alert("Both are Equal")
}

// q 03
var check = prompt("Positive,Negative or Zero")
if(check > 0){
  console.log("Positive");
  
}
else if(check < 0){
  console.log("Negative");
  
}
else if (check == 0){
  console.log("Zero");
  
}
else{
  alert("Invalid")
}

// q 04
// Not Understand

// q 05
var pass = 12345;
var password = prompt("Enter his/her Password")


 if(password === pass){
  alert("Correct!")

}
else if (password != pass){
  alert("NOt Correct!")
}
else if(password === ""){
  alert("Please enter Password")
}
else {
  alert("Type Password")
}

// q 06
var greeting;
var hour = 13;

if (hour < 18) {
greeting = "Good day";}

else{
greeting = "Good evening";
}

// q 07
var time = prompt("Enter Time hours")

if(time > 0 && time <= 12  ){
  alert("Good Morning")
}
else if(time >12 && time <=17){
  alert("Good Afternoon")
}
else if(time >17 && time <=21){
  alert("Good Evening")
}
else if(time >21 && time <=24){
  alert("Good Night")
}