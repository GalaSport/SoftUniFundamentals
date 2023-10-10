function factorialDivision(num1, num2){
    let factorialFirst = factorial(num1);
    let factorialSecond = factorial(num2);
   function factorial(num){
        let product = 1;
        for (let i = num; i >= 1; i--) {
            product *= i;  
        }
        return product;
    }
    let division = factorialFirst / factorialSecond;
    console.log(division.toFixed(2));
}
factorialDivision(6, 2);