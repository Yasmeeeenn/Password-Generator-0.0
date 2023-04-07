// Assignment Code
var generateBtn = document.querySelector("#generate");


var charUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var charLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var charSymbols = [".", "!", "@", "*"];



function generatePassword(){
  var howMany = prompt("How many characters? (8-128)");
  if (howMany < 8 || howMany > 128 ) {
    return;
  }

  var promptUppers = prompt ("Do you want uppercase letters? (yes or no)");
  var wantsUppers = false;
  if (promptUppers === "yes"){
    var wantsUppers = true;
  }

  var promptLowers = prompt ("Do you want lowercase letters? (yes or no");
  var wantsLowers = false;
  if (promptLowers === "yes"){
    var wantsLowers = true;
  }

  var promptNumbers = prompt ("Do you want numbers? (yes or no)");
  var wantsNumbers = false;
  if (promptNumbers === "yes"){
    var wantsNumbers = true;
  }

  var promptSymbols = prompt ("Do you want symbols? (yes or no)");
  var wantsSymbols = false;
  if (promptSymbols === "yes"){
    wantsSymbols = true;
  }
  if (wantsUppers == false && wantsLowers == false && wantsNumbers == false && wantsSymbols == false){
  alert("Must say yes to at least one criteria.");
  }
  }

/* var characterAll =[]
charAll = [charAll.concat(charUppers)];
charAll = [charAll.concat(charLowers)];
charAll = [charAll.concat(charNumbers)];
charAll = [charAll.concat(charSymbols)]; */

   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//add var password = generatePassword
