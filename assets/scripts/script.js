// Variable
var specChar = [ " ", "!", "\"", "#", "$", "%", "\&", "\'", "(", ")", "*", "+", ",", "-",
                 ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`",
                 "{", "|", "}", "~"];
var specCharCode = [ "\u0020", "\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", 
                     "\u0027", "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D",
                     "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E",
                     "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", 
                     "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"];

var lowerChar = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperChar = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];



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
  password = randomPass(passLength, finalSet);


  //test code (replace with actual password when complete)
  console.log(password);
 
  return password;
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
  console.log(count, chars);
  for (var i = 0; i < count; i++){
    console.log(i);
    mySet = chars[Math.floor(Math.random() * chars.length)];
    console.log(mySet);

  }

  return "string";

}