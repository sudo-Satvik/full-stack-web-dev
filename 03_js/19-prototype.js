let computer = {
    processor: "Intel",
    ram: 16,
    storage: 500,
    os: "Windows"
};

let lenovo = {
    display: '15.6inch IPS FHD',
    color: 'black',
    weight: 2.5,
    __proto__: computer
}

console.log(lenovo.__proto__)

// or

let genericCar = {tyres: 4}

let tesla = {
    driver: "AI"
}

// Instead of __proto__
// use Object.setPrototypeOf(kisme inherit krwana h, kya inherit krna h)
Object.setPrototypeOf(tesla, genericCar)

// console.log(tesla)
// console.log(genericCar)
console.log(tesla.tyres);

console.log(Object.getPrototypeOf(tesla));

