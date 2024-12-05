const constVariable = "I'm a constant";
// constVariable = "I'm immutable!";
console.log(constVariable);

// ===================================================

let letVariable = "I'm a let";
letVariable = "I'm mutable and block scoped!";
console.log(letVariable)

if (true) {
    let hereData = "dataLet";
    console.log(hereData)
}
// console.log(hereData); // ReferenceError: hereData is not defined
// ===================================================

var varVariable = "I'm a var";
varVariable = "I'm mutable and function scoped!";
console.log(varVariable)

if (true) {
    var hereData = "dataVar";
    console.log(hereData)
}
console.log(hereData); 



function fnc() {
    var varVariable = "I'm a var inside a function";
    console.log(varVariable)
}
// console.log(varVariable); // ReferenceError: varVariable is not defined