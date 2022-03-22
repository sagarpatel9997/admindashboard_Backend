const Employee = require('../models/employee');


// graph age controller
exports.age=(req,res)=>{
    try {
        Employee.aggregate([

        { $group: { _id: '$age', count: { $sum: 1 } } }

        ], function (err, result) {
           return res.send(result)
         })

    }catch (error) {
        console.log(error)
        res.send({ status: 'error', error: 'invalid token' })

}}

// graph salary controller
exports.salary=(req,res)=>{
    try {
        Employee.aggregate([
            { $group: { _id: '$salary', count: { $sum: 1 } } }

        ], function (err, result) {
            console.log(result);
            return res.send(result)
        }
        )

    } catch (error) {
        console.log(error)
        res.send({ status: 'error', error: 'invalid token' })

    }
}