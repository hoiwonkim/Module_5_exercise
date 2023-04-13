const Logger = require('./Logger')


class Calculator {
  constructor() {
    this.id =  this.#getRandomInt(10000)// generate random ID
    this.Logger = new Logger()
  }
  #getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  
  #log = (value) => {
    this.Logger.log(this.id, value)
  }
  
  add(num1, num2) {
    const value = num1 + num2; // use mathjs library to add the numbers
    this.#log(value); // log caller ID and result
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value
  }
}

module.exports = Calculator;

    // const Calculator = require('./libraries/Calculator');
    // const myCalc = new Calculator();
    // myCalc.add(3, 4);
    
    
    // const addNumbers = (req, res) => {
    // let number1 = parseInt(req.query.num1);
    // let number2 = parseInt(req.query.num2);
    // const myCalc = new Calculator(); // create new instance of Calculator for each request
    // let sum = myCalc.add(number1, number2);
    // res.status(200);
    // res.json({ result: sum });
    // };
    
