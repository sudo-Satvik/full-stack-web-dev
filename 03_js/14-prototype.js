let computer = { cpu: 12 , ram: 8};
let lenovo = { 
    screen: "HD",
    __proto__: computer,
};
let macbook = {__proto__:lenovo};

// console.log(computer);
// console.log(computer.__proto__);         // check in the browser it will give u KT
console.log(lenovo.__proto__);              // Inherits the properties of computer

console.log(macbook.__proto__);             // Inherits the properties of lenovo
console.log(macbook.__proto__.__proto__);   // Inherits the properties of computer