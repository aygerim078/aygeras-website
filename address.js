let obj = {
    address: {
        street: 'Kunayeva',
        number: 21,
        city: 'Astana',
        zipCode: '010000'
    },
    showAddress() {
        console.log(this.address);
    }
}

let currentAddress = obj.showAddress();
console.log(currentAddress);