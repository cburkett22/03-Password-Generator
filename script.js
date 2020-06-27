// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// added "Number" in order to allow the prompt to recognize a number rather than a string
var length = Number(prompt("How many characters will your password contain? Enter a number between 8 and 128: "));
var charType = prompt("Enter a character type: u = uppercase, l = lowercase, n = numeric, s = special. \nSeperate by commas. \nExample: u, l, n, s");

// generate password
function generatePassword() {
  // evaluate character type
  var charSet = "";
  var userInput = charType.toLowerCase();
  if (userInput === "u") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
    else if (userInput === "l") {
      charSet = "abcdefghijklmnopqrstuvwxyz";
    }
    else if (userInput === "n") {
      charSet = "0123456789";
    }
    else if (userInput === "s") {
      charSet = " !\#$%&()*+,-./:;<=>?@[\]^_{|}~";
    }
    else if (userInput === "u, l") {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    else if (userInput === "u, n") {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
    else if (userInput === "u, s") {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !\#$%&()*+,-./:;<=>?@[\]^_{|}~";
    }
    else if (userInput === "u, l, n") {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }
    else if (userInput === "u, l, s") {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !\#$%&()*+,-./:;<=>?@[\]^_{|}~";
    }
    else if (userInput === "u, n, s") {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\#$%&()*+,-./:;<=>?@[\]^_{|}~";
    }
    else if (userInput === "l, n") {
      charSet = "abcdefghijklmnopqrstuvwxyz0123456789";
    }
    else if (userInput === "l, s") {
      charSet = "abcdefghijklmnopqrstuvwxyz !\#$%&()*+,-./:;<=>?@[\]^_{|}~";
    }
    else if (userInput === "l, n, s") {
      charSet = "abcdefghijklmnopqrstuvwxyz0123456789 !\#$%&()*+,-./:;<=>?@[\]^_{|}~";
    }
    else if (userInput === "n, s") {
      charSet = "0123456789 !\"#$%&()*+,-./:;<=>?@[\]^_{|}~";
    }
    else if (userInput === "u, l, n, s") {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !\#$%&()*+,-./:;<=>?@[\]^_{|}~";
    }

    // return value
    var retVal = "";
    for (var i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return retVal;
}

//alert(generatePassword());

// what does an event listener do?
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ISSUES:
// Need to only allow password lengths between 8-128 (it allows 1-7)
// **DONE** Need to be able to enter multiple parameters for more complex passwords