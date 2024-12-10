const readline = require('readline');
const calculator = require('./calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Node.js Calculator!");
console.log("Available operations: add, subtract, multiply, divide");

rl.question("Enter the operation: ", (operation) => {
  rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      try {
        let result;
        switch (operation.toLowerCase()) {
          case "add":
            result = calculator.add(a, b);
            break;
          case "subtract":
            result = calculator.subtract(a, b);
            break;
          case "multiply":
            result = calculator.multiply(a, b);
            break;
          case "divide":
            result = calculator.divide(a, b);
            break;
          default:
            console.log("Invalid operation. Please choose add, subtract, multiply, or divide.");
            rl.close();
            return;
        }

        console.log(The result is: ${result});
      } catch (error) {
        console.log(Error: ${error.message});
      } finally {
        rl.close();
      }
    });
  });
});