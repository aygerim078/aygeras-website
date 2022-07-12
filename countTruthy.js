function countTruthy(values) {
    let count = 0;
    for (let value of values) {
        if (value) {
            count++;
        }
    }
    return count;
}

let values = ['Jonh', 45, null, 'a', false, [], 0, true];
let count = countTruthy(values);
console.log(count)