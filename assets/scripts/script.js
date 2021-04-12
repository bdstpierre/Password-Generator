// Setup object to hold all characters
var allChars = {

  specChar: [ " ", "!", "\"", "#", "$", "%", "\&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],

  lowerChar: [  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  upperChar: [  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],

  numChar: [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Query for password criteria and build password
function generatePassword(){
  // Determine the length of the password
  var passLength = queryLength();
  
  // Determine the characters sets to use
  finalSet = queryCharacters();

  // Determine the password based on the criteria
  myPassword = randomPass(passLength, finalSet);
 
  return myPassword;
};

// Query for length of the password
function queryLength(){
  response = prompt("How many characters do you want in your password? [8-128]");
  while (response < 8 || response > 128){
    if (response < 8){
      response = prompt("The length must be greater than " + response + "\nHow many characters do you want in your password? [8-128]");
    } else if (response > 128){
      response = prompt("The length must be less than " + response + "\nHow many characters do you want in your password? [8-128]");
    }
  }
  
  return response;
  
}

// Query for character sets to include in the list of possible characters
function queryCharacters(){
  var sets;
  var finalSet = [];
  while (!finalSet.length){
    // Ask about lowercase letters
    sets = confirm("Do you want to include lowercase letters in your password?");
    if (sets){
      finalSet.push('lowerChar');
    }
    // Ask about uppercase letters
    sets = confirm("Do you want to include uppercase letters in your password?");
    if (sets){
      finalSet.push('upperChar');
    }
    // Ask about numbers
    sets = confirm("Do you want to include numbers in your password?");
    if (sets){
      finalSet.push('numChar');
    }
    // Ask about special characters
    sets = confirm("Do you want to include special characters in your password?");
    if (sets){
      finalSet.push('specChar');
    }
    if (!finalSet.length){
      alert("YOU MUST SELECT AT LEAST ON TYPE OF CHARACTER!");
    }  
  }

  return finalSet;

}

function randomPass(count, chars){
  // for each character in the password, we will randomly select
  // a character set to use and then randomly choose a character
  // from that set

  var myPassword = "";
  for (var i = 0; i < count; i++){
    var mySet = chars[Math.floor(Math.random() * chars.length)];
    var myChar = allChars[mySet][Math.floor(Math.random() * allChars[mySet].length)];

    myPassword += myChar;
  }

  return myPassword;

}