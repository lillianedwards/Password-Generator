//VARIABLE DECLARATIONS
//add more acceptable characters
var userCharslength;
var specialChar = ["!", "@", "#", "$"];
var numericChar = [1,2,3,4,];
var lowercaseChar = ["a", "b", "c", "d"];
var uppercaseChar = ["A","B", "C", "D"];

//this is storing a reference to the button element in the HTML
var generateBtn = document.querySelector("#generate");


//FUNCTIONS

function generatePassword () {
 var userCharslength = prompt("How many characters would you like your password to contain?");
 if (userCharslength <8 || userCharslength> 128){
  alert("Please choosea number between 8 and 128.")
  generatePassword();
 };
 var specialChar = confirm("Click OK to confirm including special characters.");
 var numericChar = confirm("Click OK to confirm including numeric characters.");
 var lowercaseChar = confirm("Click OK to confirm including lowercase characters.");
 var uppercaseChar = confirm("Click OK to confirm including uppercase characters.");
//gathered users preferences for password

var userOptions = {
  length: userCharslength,
  willHaveSpecialChars: specialChar,
  willHaveNumericChars: numericChar,
  willHaveLowerChars: lowercaseChar,
  willHaveUppChars: uppercaseChar,
};

if (userOptions.willHaveSpecialChars ) {
  //let's randomly grab a memeber from the specialChar array
  //push into results array
}
if (userOptions.willHaveNumericChars ) {
  //let's randomly grab a memeber from the numeric characters array
  //push into results array
}
if (userOptions.willHaveLowerChars ) {
  //let's randomly grab a memeber from the lower characters array
  //push into results array
}
if (userOptions.willHaveUppChars ) {
  //let's randomly grab a memeber from the upper characters array
  //push into results array
}
var result = [];
//Eventually this array will store the random generated password. I will use push method to add to this array and this is what I will return to the user
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Storing a reference to the textarea element 

  passwordText.value = password;
}



// Add event listener to generate button
// event is a click, "whenever the generatebtn is clicked, write this passwork"
//reference.addEvent.listerner.run this function is taking place
generateBtn.addEventListener("click", writePassword);

