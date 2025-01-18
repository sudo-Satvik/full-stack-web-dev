// Now I want to access the file of calculation content
import sumData, {greetWithName} from "./default.js";
import { greetWithNamed, greetWithAge } from "./named.js";

console.log(greetWithName("Satvik"));
console.log(greetWithNamed("Mayank"));
console.log(greetWithAge(21));
console.log(sumData(1, 2));