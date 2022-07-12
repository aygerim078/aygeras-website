let speed = prompt('Текущая скорость автомобиля:', 0);

let licenceSpeed = 70;
let diffSpeed;
let result;

function checkSpeed(speed) {
    if (speed <= licenceSpeed) {
        return console.log('OK');
    } else if (speed > licenceSpeed) {
        diffSpeed = speed - licenceSpeed;
        let point = diffSpeed / 5;
        console.log(point);
        result = Math.floor(point);
        if (result >= 12) {
            alert('Лицензия приостановлена');;
            console.log('Лицензия приостановлена');
        }
    }
}

checkSpeed(speed);