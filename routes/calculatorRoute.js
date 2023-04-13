var express = require("express")

var router = express.Router()

var calculatorController = require('../controllers/calculatorController')


// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query.number1)
//     let number2 = parseInt(req.query.number2)
//     let sum = number1 +  number2


//     // console.log(sum)
//     res.status(200) //200 series means ok (erro status in 400-500 range) 403 = forbidden // 401 = unauthorised // 500 means server error
//     res.json({"result":result})
// })
    
router.get('/add', calculatorController.addNumbers)
router.get('/subtract', calculatorController.subtractNumbers)
    // let number1 = parseInt(req.body.number1)
    // let number2 = parseInt(req.body.number2)
    // let result = number1 -  number2
    // console.log(req.params)
    // console.log(sum)
    // res.status(200) //200 series means ok (erro status in 400-500 range) 403 = forbidden // 401 = unauthorised // 500 means server error
    // res.json({"result":result})

module.exports = router
    