// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!!


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const number = 123
const string = String(number)

console.log(string)

// Write a JavaScript program to convert a string to the number.
const string = "123"
const number = Number(string)

console.log(number)


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//   * Boolean
//   * Null
//   * Undefined
//   * Number
//   * NaN
//   * String
// NOTE: Exlclude this function while completing Part II. The Data Type will always return as a String. If you want a challenge, come back to this function and start in the console. Then see what you can make of it. Again, simply skip this function while completing Part II of this project.
function checkType(value) {
  if (typeof value === "boolean") {
    console.log("boolean");
  } else if (value === null) {
    console.log("null")
  } else if (typeof value === "undefined") {
    console.log("Undefined");
  } else if (typeof value === "number") {
    if (isNaN(value)) {
      console.log("NaN");
    } else {
      console.log("Number");
    }
  } else if (typeof value === "string") {
    console.log("string");
  } else {
    console.log("Unknown Type");
  }
}

checkType(true);
checkType(null);
checkType(undefined);
checkType(123);
checkType(NaN);
checkType("Hello world");
checkType([]);
checkType({});
checkType(() => {});

  
// Write a JavaScript program that adds 2 numbers together.
const num1 = 1
const num2 = 2

console.log(num1 + num2)


// Write a JavaScript program that runs only when 2 things are true.
function runProgram(condition1, condition2) {
  if (condition1 && condition2) {
  console.log("Program is running successfully");
} else {
  console.log("Conditions were not met, program is not running");
}
}

let condition1 = true;
let condition2 = true;

runProgram(condition1, condition2)


// Write a JavaScript program that runs when 1 of 2 things are true.
function runProgram(condition1, condition2) {
  if (condition1 || condition2) {
  console.log("Program is running successfully");
} else {
  console.log("Conditions were not met, program is not running");
}
}

let condition1 = true;
let condition2 = false;

runProgram(condition1, condition2)


// Write a JavaScript program that runs when both things are not true.  
function runProgram(condition1, condition2) {
  if (!condition1 && !condition2) {
  console.log("Program is running successfully");
} else {
  console.log("Conditions were not met, program is not running");
}
}

let condition1 = false;
let condition2 = false;

runProgram(condition1, condition2)
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
