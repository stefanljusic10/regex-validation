// Basic email validation

function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/.test(email);
    return regex;
}

//  \S+@        # check if there is non-whitespace character before @
//  \S+\.       # check if there is non-whitespace character between @ and .
//  \S+         # check if there is non-whitesoace character after .