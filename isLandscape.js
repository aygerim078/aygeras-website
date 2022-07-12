function isLandscape(width, height) {
    if (width > height) {
        return true;
    } else {
        return false;
    }
}

let width = 1920;
let height = 1080;

let result = isLandscape(width, height);
console.log(result);