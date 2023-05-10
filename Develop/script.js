// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = newPass;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

//display prompt and get info

var charUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var charLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var charSymbols = [".", "!", "@", "*"];

var charPool = [];
var newPass = "";

function generatePassword(){
  var lengthPass = prompt("Enter amount of characters desired.(8-125)");
  if (lengthPass < 8 || lengthPass > 128 ) {
    return;
  }
  var upperCase = confirm("Do you want uppercase letters?");
  if (upperCase){
   charPool.push(...charUppers);
  } 
  var lowerCase = confirm("Do you want lowercase letters?");
  if (lowerCase){
    charPool.push(...charLowers);
  } 
  var numbers = confirm("Do you want numbers?");
  if (numbers){
    charPool.push(...charNumbers);
  }
  var specialChar = confirm("Do you want special characters?");
  if (specialChar){
    charPool.push(...charSymbols);
  } 
  if (upperCase == false && lowerCase == false && numbers == false && specialChar == false){
    alert("Must select at least one criteria.");
    }
 
  for (var i = 0; i<lengthPass; i++){
    var randomIndex = Math.floor(Math.random() * charPool.length);
    var randomPass = charPool[randomIndex];
    newPass += randomPass.toString();
  }

}

