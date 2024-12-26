// We use getters and setters to expose the hidden method or property in order to maintain the robustness or security

class Student{
    #rollNo;
    constructor(name, rollNo) {
        this.name = name
        this.#rollNo = rollNo
    }
    // the name should be same
    get rollNo(){
        return this._rollNo
    }
    set rollNo(num){
        if(num < 0) console.error("Invalid Rollno.")
        else this._rollNo = num
    }
}

let student1 = new Student("Satvik", -34)
// console.log(student1.rollNo);       // doesn't shows any change because it occurs in the constructor, not in setters


student1.rollNo = -2000