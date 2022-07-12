function checkPrimes(num) {
    if (num == 1) {
        return false;
    }
    if (num == 2) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(checkPrimes(8))

function showPrimes(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (checkPrimes(i)) {
            arr.push(i);
        }
    }
    return arr;
}


console.log(showPrimes(20));