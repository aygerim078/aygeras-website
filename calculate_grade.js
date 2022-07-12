let average = 0;
let keys = 0;

function calculateGrade(arr) {
    for (let key of arr) {
        keys += key;
    }
    average = keys / arr.length;
    if (average > 90) {
        return 'A';
    } else if (average > 80) {
        return 'B';
    } else if (average > 70) {
        return 'C';
    } else if (average > 60) {
        return 'D';
    } else {
        return 'F';
    }
}

let marks = [80, 80, 50, 55];
let grade = calculateGrade(marks);
console.log(grade)