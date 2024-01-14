// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var numPasswords = parseInt(prompt("Enter the number of passwords to genetate"));

  // Validate the number of passwords
  if (isNaN(numPasswords) || numPasswords <= 0) {
    alert('Please enter a valid number greater than 0');
    //Restart if input is invalid
    return writePassword();
  }
//character types
var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

//Length for all passwords
var sameLength = confirm("Do you want all passwords to have the same length?");
var length;

if (sameLength) {
    length = parseInt(prompt("Enter the length of the passwords (between 8 and 128 characters):"));

    // Validate the length
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid number between 8 and 128.");
      return writePassword(); 
    }
  }

var passwords = generatePasswords(numPasswords, includeLowercase, includeUppercase, includeNumeric, includeSpecial, sameLength, length);
var passwordText = document.querySelector("#password");

  // Password display
  passwordText.style.height = "200px"; 
  passwordText.style.overflowY = "auto"; 

  passwordText.value = passwords.join('\n'); 
}

// Generate multiple password function
function generatePasswords(numPasswords, includeLowercase, includeUppercase, includeNumeric, includeSpecial, sameLength, length) {
    var passwords = [];
  
    for (var i = 0; i < numPasswords; i++) {
      if (sameLength) {
        passwords.push(generatePassword(includeLowercase, includeUppercase, includeNumeric, includeSpecial, length));
      } else {
        passwords.push(generatePassword(includeLowercase, includeUppercase, includeNumeric, includeSpecial));
      }
    }
  
    return passwords;
  }

// Function to generate password based on common criteria
function generatePassword(includeLowercase, includeUppercase, includeNumeric, includeSpecial, length) {
    if (!length) {
      length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  
      // length
      if (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid number between 8 and 128.");
        return generatePassword(includeLowercase, includeUppercase, includeNumeric, includeSpecial); // Restart the process if invalid input
      }
    }
  
    // Generate password based on common criteria
    var password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  
    return password;
  }

// function to generate random password based on criteria
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
    var allChars = "";
  
    if (includeLowercase) allChars += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumeric) allChars += "0123456789";
    if (includeSpecial) allChars += "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";
  
    if (!allChars) {
      alert("At least one character type must be selected.");
      return generateRandomPassword(length, true, true, true, true); // Restart the process if no character type is selected
    }
  
    var password = "";
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);