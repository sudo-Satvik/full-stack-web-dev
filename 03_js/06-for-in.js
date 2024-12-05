const studentData = {
    name: "Satvik Sharma",
    age: 20,
    rollNo: 123,
    marks: {
        hindi: 90,
        english: 80,
        maths: 70,
        science: 60,
        social: 50
    }
};
// Accessing nested object properties
console.log(studentData.marks.hindi); // Output: 90

for (let k in studentData) {
    console.log(`${k}: ${studentData[k]}`);
}