//Task :  Create different ways of defining functions

//Function Declaration:
function functionDeclaration(a, b) {
  return a + b;
}
let result = functionDeclaration(10, 10);
console.log(`functionDeclaration :${result}`);

// Function Expression:
const functionExpression = function (x, y) {
  return x * y;
};
let result2 = functionExpression(5, 5);
console.log(`functionExpression :${result2}`);

//Arrow Function:
const arrowFunction = (x, y) => x / y;
let result3 = arrowFunction(10, 2);
console.log(`arrowFunction :${result3}`);

//Immediately Invoked Function Expression (IIFE):
let result4 = (function (a, b) {
  return a - b;
})(20, 10);
console.log(`IIFE :${result4}`);

//Constructor Function:
const constructorFunction = new Function("x", "y", "return x * y");
let result5 = constructorFunction(10, 10);
console.log(`constructorFunction:${result5}`);
