// these are stored/passed by values.
// so, we can't change the original value

let string = "SATVIK"
console.log("String: " + string);
console.log("======================================");
let number = 12;
let number2 = 12.5;
console.log("Number(integer): " + number);
console.log("Number(float): " + number2);
console.log("======================================");
let boolean = true;
console.log("Boolean: " + boolean);
console.log("======================================");
let bigInt = 1234567890987654321023123131234314n;
console.log("BigInt: " + bigInt);
console.log("======================================");
let undefinedVar;
console.log("Undefined: " + undefinedVar);
console.log("======================================");
let nullVar = null;
console.log("Null: " + nullVar);
console.log("======================================");
let symbol = Symbol('satvik');
console.log(symbol);
console.log("======================================");
let symbol2 = Symbol('satvik');
console.log(symbol === symbol2);

