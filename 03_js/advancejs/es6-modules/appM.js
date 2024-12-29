// Default Import

import multiply, { add, subtract } from "./mathOperationsM";

// Named Import ~ Not Default Exports
import { add, subtract } from './mathOperationsM.js'

console.log(multiply(2,2));

console.log(add(2,3));
console.log(subtract(3,1));
