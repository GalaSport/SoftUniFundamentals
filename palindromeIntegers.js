function palindromeIntegers(arr) {

    for (let curr of arr) {
        checkPalindrom(curr);

        function checkPalindrom(curr) {
            let currAsString = String(curr)
            let reverseNum = "";
            for (let i = currAsString.length - 1; i >= 0; i--) {
                currEl = currAsString[i];
                reverseNum += currEl;
            }
            let isPalindrome = currAsString == reverseNum;
            console.log(isPalindrome);
        }
    }
}
palindromeIntegers([123,323,421,121]);