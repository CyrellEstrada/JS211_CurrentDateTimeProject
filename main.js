// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!!


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
// console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numberToString = () => {
  const number1 = 123
  const string1 = String(number1)
  
  return string1;

}
const updateDisplay1 = () => {
  document.getElementById("display-element").innerHTML = numberToString();
}

//I'm unsure why in the code above why I couldn't have put the "numberToString" function in the onclick

// Write a JavaScript program to convert a string to the number.
const stringToNumber = () => {
  const string2 = "456"
  const number2 = Number(string2)
  
  return number2
}
const updateDisplay2 = () => {
  document.getElementById("display-element").innerHTML = stringToNumber();
}


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
  console.log("Boolean");
} else if (typeof value === null) {
  console.log("Null");
} else if (typeof value === "undefined") {
  console.log("Undefined");
} else if (typeof value === "number") {
  console.log("Number");
} else if (typeof value === "string") {
  console.log("String");
} else {
  console.log("Unknown");
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

const updateDisplay3 = () => {
  document.getElementById("display-element").innerHTML = checkType();
}

// const variable1 = true
// const variable2 = Null
// const variable3 = undefined
// const variable4 = 1
// const variable5 = 0.0 / 0.0
// const variable6 = "string"

// console.log(typeof variable1)
// console.log(typeof variable2)
// console.log(typeof variable3)
// console.log(typeof variable4)
// console.log(typeof variable5)
// console.log(typeof variable6)


  
// Write a JavaScript program that adds 2 numbers together.
const numbers = (num1,num2) => {
  return num1 + num2
}

numbers(1,2)s


// Write a JavaScript program that runs only when 2 things are true.
const pass1 = "This function ran correctly"
const realFirstName1 = "Cyrell"
const inputFirstName1 = "Cyrell"
const realLastName1 = "Estrada"
const inputLastName1 = "Estrada"

if (inputFirstName1 === realFirstName1 && inputLastName1 === realLastName1) {
  console.log(pass1)
} else {
  console.log("This function ran incorrectly")
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const pass2 = "This function ran correctly"
const realFirstName = "Cyrell"
const inputFirstName = "Cyrell"
const realLastName = "Estrada"
const inputLastName = "Estrada"

if (inputFirstName === realFirstName || inputLastName === realLastName) {
  console.log(pass2)
} else {
  console.log("This function ran incorrectly")
}


// Write a JavaScript program that runs when both things are not true.  
const pass = "This function ran correctly"

if (8 != 5 && 6 != 7) {
  console.log(pass)
} else {
  console.log("This function ran incorrectly")
}


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
