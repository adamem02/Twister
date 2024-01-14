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

if (sameLength){
    length = paraInt(prompt("Enter the length of the passwords (between 8 and 128 characters)"));

    // Validates the length
    if (isNaN(length) || length < 8 || length > 128) {
        alert('Please enter a valid number between 8 and 128');
        return writePassword();
    }
}

  var password = generatePassword(numPasswords, includeLowercase, includeUppercase, includeSpecial, sameLength, length);
  var passwordText = document.querySelector("#password");

  // Password display
  passwordText.style.height = "200px";
  passwordText.style.overflowY = "auto";

  passwordText.value = passwords.join('\n');
}

// Generate multiple password function
function generatePassword(numPasswords, includeLowercase, includeNumeric, includeSpecial, length) {
    var passwords = [];

    for (var i = 0; i < numPasswords; i++) {
        if (sameLength) {
            passwords[i] = (generatePassword(length, includeLowercase, includeNumeric, includeSpecial, includeUppercase));
        } else {
            passwords[i] = (generatePassword(includeLowercase, includeNumeric, includeSpecial, includeUppercase, length));
        }
    }

    return passwords;
}

// Function to generate password based on the criteria 
function generatePassword(includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
    if (!length) {
        length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters)"));


        // length
        if (isNaN(length) || length < 8 || > 128) {
            alert('Please enter a valid number between 8 and 128');
            return generatePassword(includeLowercase, includeUppercase, includeNumeric, includeSpecial);
            }
        }

        var password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

        return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);