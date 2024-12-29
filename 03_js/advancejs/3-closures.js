function outerFunc() {
    let outerVar = 4;
    return function(){
        outerVar++;     //it is accessible here
        return outerVar;
    }
}

let outer = outerFunc()

console.log(outer());