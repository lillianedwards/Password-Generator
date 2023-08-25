//VARIABLE DECLARATIONS

var userCharslength;
var specialCharArr = ["!", "@", "#", "$", "%", "&"];
var numericCharArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercaseCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//changed global variable name to idietify arrays so later code isn't shadowed

//this is storing a reference to the button element in the HTML
var generateBtn = document.querySelector("#generate");

//FUNCTION

function generatePassword() {
  var userCharslength = prompt(
    "How many characters would you like your password to contain?"
  );
  if (userCharslength < 8 || userCharslength > 128) {
    alert("Please choose a number between 8 and 128.");
    generatePassword();
  }
  var specialChar = confirm(
    "Click OK to confirm including special characters."
  );
  var numericChar = confirm(
    "Click OK to confirm including numeric characters."
  );
  var lowercaseChar = confirm(
    "Click OK to confirm including lowercase characters."
  );
  var uppercaseChar = confirm(
    "Click OK to confirm including uppercase characters."
  );
  if (!specialChar && !numericChar && !lowercaseChar && !uppercaseChar) {
    alert("Please confirm the use of at least one type of character.");
    generatePassword();
  }
  //gathered users preferences for password

  var userOptions = {
    length: userCharslength,
    willHaveSpecialChars: specialChar,
    willHaveNumericChars: numericChar,
    willHaveLowerChars: lowercaseChar,
    willHaveUppChars: uppercaseChar,
  };

  var result = [];
  var finalPassword = "";
  if (userOptions.willHaveSpecialChars) {
    result = result.concat(specialCharArr);
    //concat is rewriting new array rather than creating an array filled with little arrays
  }
  if (userOptions.willHaveNumericChars) {
    result = result.concat(numericCharArr);
  }
  if (userOptions.willHaveLowerChars) {
    result = result.concat(lowercaseCharArr);
  }
  if (userOptions.willHaveUppChars) {
    result = result.concat(uppercaseCharArr);
  }
  for (var i = 0; i < userOptions.length; i++) {
    var charIndex = Math.floor(Math.random() * result.length);
    finalPassword = finalPassword + result[charIndex];
  }
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Storing a reference to the textarea element

  passwordText.value = password;
}


//reference.addEvent.listerner.run this function is taking place
generateBtn.addEventListener("click", writePassword);
