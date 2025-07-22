const logger = require("./logger.libraries.js");

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1e16);
  }

  add(num1, num2) {
    const value = num1 + num2;
    logger.log(`[Calculator:${this.id}] add result: ${value}`);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    logger.log(`[Calculator:${this.id}] subtract result: ${value}`);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    logger.log(`[Calculator:${this.id}] multiply result: ${value}`);
    return value;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      logger.log(`[Calculator:${this.id}] divide error: Cannot divide by zero`);
      throw new Error("Cannot divide by zero");
    }
    const value = num1 / num2;
    logger.log(`[Calculator:${this.id}] divide result: ${value}`);
    return value;
  }
}

module.exports = Calculator;
