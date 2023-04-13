// page 41 - module 5

const Calculator = require("../libraries/Calculator");
let calcThis = new Calculator()

const addNumbers = (req, res) => {

    let number1=parseInt(req.query.number1);
    let number2=parseInt(req.query.number2);
    let result=calcThis.add(number1, number2)
    console.log(result)
    res.status(200)
    res.json({result: result})
}

const subtractNumbers = (req, res) => {

    let number1=parseInt(req.query.number1);
    let number2=parseInt(req.query.number2);
    let result=calcThis.subtract(number1, number2)
    console.log(result)
    res.status(200)
    res.json({result: result})
}


module.exports = {
    addNumbers,
    subtractNumbers
}