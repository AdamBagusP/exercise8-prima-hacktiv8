function listPrima(num1, num2) {
    let result = '';

    for (let i = num1; i <= num2; i++) {
        let prima = true;
        for (let j = 2; j < i; j++){
            if (i % j == 0){
                prima = false;
                break;
            }
        }

        if (i > 1 && prima == true) {
            result += i + ', ';
        }
        
    } return result;
}

console.log(listPrima(1, 5));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));