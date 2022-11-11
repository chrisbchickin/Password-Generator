// Assignment code here
// Declaring variables
let generatePassword = function () {
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let charArray = [];
let generatedPass = ""

// getting password length
let charLength = prompt("Choose a password length between 8 and 128");
// making sure user must use acceptable password length
while (charLength < 8 || charLength > 128) {
  alert("Invalid password length please try again");
  charLength = prompt("Choose a password length between 8 and 128");
}
// getting password character criteria
let includeUpCase = confirm("click ok if you would like to include upper case letters");
let includeLowCase = confirm("click ok if you would like to include lower case letters");
let includeNum = confirm("click ok if you would like to include numbers");
let includeSym = confirm("click ok if you would like to include symbols");

// making sure the user picks at least one criteria
while (!includeUpCase && !includeLowCase && !includeNum && !includeSym) {
  alert("Please select at least one");
  includeUpCase = confirm("click ok if you would like to include upper case letters");
  includeLowCase = confirm("click ok if you would like to include lower case letters");
  includeNum = confirm("click ok if you would like to include numbers");
  includeSym = confirm("click ok if you would like to include symbols");
}


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
