
// 1. ARROW FUNCTIONS
// Original function
function multiply(a, b) { 
  return a * b; 
}

// Converted to arrow function
const multiply = (a, b) => a * b;

// Alternative arrow function syntax (with curly braces)
const multiplyAlt = (a, b) => {
  return a * b;
};

console.log(multiply(3, 4)); // 12


// 2. DESTRUCTURING
const person = { name: 'John', age: 25, city: 'NYC' };

// Extract name and age using destructuring
const { name, age } = person;

console.log(name); // 'John'
console.log(age);  // 25

// You can also rename variables during destructuring
const { name: personName, age: personAge } = person;

console.log(personName); // 'John'
console.log(personAge);  // 25


// 3. SPREAD OPERATOR
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combine arrays using spread operator
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Alternative ways to use spread
const combinedWithExtra = [0, ...array1, 3.5, ...array2, 7];
console.log(combinedWithExtra); // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]


// 4. PROMISES
// Create a promise that resolves after 2 seconds
const delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 2000);
});

// Using the promise with .then()
delayedPromise.then(message => {
  console.log(message); // "Hello World" (after 2 seconds)
});

// Alternative: Using async/await
async function usePromise() {
  try {
    const message = await delayedPromise;
    console.log(message); // "Hello World" (after 2 seconds)
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
usePromise();


// 5. MODULES
// ==================
// File 1: mathUtils.js (Export file)
// ==================

// Named export
export function add(a, b) {
  return a + b;
}

// Another named export
export const PI = 3.14159;

// Default export
export default function subtract(a, b) {
  return a - b;
}

// You can also export like this:
// const add = (a, b) => a + b;
// const PI = 3.14159;
// const subtract = (a, b) => a - b;
// 
// export { add, PI };
// export default subtract;


// ==================
// File 2: main.js (Import file)  
// ==================

// Import default export
import subtract from './mathUtils.js';

// Import named exports
import { add, PI } from './mathUtils.js';

// Import everything with alias
import * as math from './mathUtils.js';

// Using the imported functions
console.log(add(5, 3));        // 8
console.log(subtract(10, 4));   // 6
console.log(PI);               // 3.14159

// Using with alias
console.log(math.add(2, 3));   // 5
console.log(math.default(8, 2)); // 6 (default export)
console.log(math.PI);          // 3.14159