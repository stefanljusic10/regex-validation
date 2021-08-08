// CODEWARS - Regex Password Validation
// You need to write regex that will validate a password to make sure it meets the following criteria:

// - At least six characters long
// - contains a lowercase letter
// - contains an uppercase letter
// - contains a number

// Valid passwords will only be alphanumeric characters.

function validate(password) {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
    return regex;
}

// ^               # start of input 
// (?=.*?[A-Z])    # check if there is at least one upper case letter
// (?=.*?[a-z])    # check if there is at least one lower case letter
// (?=.*?[0-9])    # check if there is at least one number
// [A-Za-z0-9]{6,} # check if there are at least 6 characters of [A-Za-z0-9]
// $  