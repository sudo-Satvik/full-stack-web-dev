const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Total Sum: "+sumArr);