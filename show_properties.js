function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            return console.log(key, obj[key]);
        }
    }
}

let movie = {
    title: 'Whiplash',
    releaseYeat: 2013,
    rating: 8.3,
    director: 'Damien Chazelle'
};

let properties = showProperties(movie);
console.log(properties)