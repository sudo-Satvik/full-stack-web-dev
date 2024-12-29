console.log("Start");       // It will executes first

setTimeout(() => {
  console.log("Timeout");       // It will executes last which is pleaced in macrotask queue
}, 0);

Promise.resolve().then(() => {  // It will executes third which is pleaced in microtask queue
  console.log("Promise");
});

console.log("End");     // It will executes second
