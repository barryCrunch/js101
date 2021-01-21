// truthiness.js

console.log(true);
console.log(false);

function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

makeLonger("abc", true);
makeLonger("xyz", false);

function isDigit(char) {
  if (char >= "0" && char <="9") {
    return true;
  } else {
    return false;
  }
}

isDigit("5");
isDigit("a");

let value = true;

if (value === true) {
  console.log("It's true!");
} else if (value === false) {
  console.log("It's false!");
} else {
  console.log("It's not true or false!")
}

let num = 5;

if (num < 10) {
  console.log("small number");
} else {
  console.log("large number");
}
  
function isSmall(number) {
  return number < 10;
}

num = 15;

if (isSmall(num)) {
  console.log("Small Number");
} else {
  console.log("Large Number");
}

let lastName

if (lastName && (lastName.length > 0)) {
  console.log(`Hi, ${lastName}.`)
} else {
  console.log("Hello, whoever you are.")
}

// JavaScript evaluates almost all values as true except for:
// - false
// - undefined
// - null
// - 0 
// - "" (an empty string)
// - NaN

num = 5;
if (num) {
  console.log("valid number");
} else { 
  console.log("error!")
}

console.log(num === true);

