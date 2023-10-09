function passwordValidator(password) {
    let isValidLength = passwordLength(password);
    let isValidLettersDigits = lettersAndDigits(password);
    let isValidMin2Digits = min2Digits(password);
    if (isValidLength && isValidLettersDigits && isValidMin2Digits) {
        console.log("Password is valid");
    }
    function passwordLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }
    function lettersAndDigits(password) {
        for (let currEl of password) {
            let code = currEl.charCodeAt(0);
            if (
                !((code >= 48 && code <= 57) ||
                    (code >= 65 && code <= 90) ||
                    (code >= 97 && code <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
            }
            return true;
        }
    }
    function min2Digits(password) {
        let digitsCount = 0;
        for (let currel of password) {
            let code = currel.charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digitsCount++;
            }
        }
        if (digitsCount < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }
passwordValidator('MyPass123');