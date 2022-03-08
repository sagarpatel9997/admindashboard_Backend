const express = require('express');
const Employee = require('../src/models/employee');
const router = express.Router();


// ADD EMPLOYESS 
router.post("/insertemployee", (req, res) => {
    const user = new Employee(req.body);
  
    console.log(user);
    console.log(req.body);
    user.save().then(() => {
      res.status(201).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
  
  
  })

  //GET EMPLOYE DATA
router.get("/getemployee", (req, res) => {


    Employee.find({}, function (err, employees) {
      if (err) {
        res.send(err)
      }
      else {
        res.send(employees)
      }
    });
  
  })

  //DELETE Employee details
router.delete("/deleteemployee/:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    userData = Employee.findByIdAndDelete(id);
    userData.exec(function (err, data) {
      if (err) throw err;
      res.send("deleted")
    })
  
  })

  //UPDATE employee details
 router.put("/updateemployee/:id", (req, res) => {
    const id = req.params.id
    console.log(id);
    console.log(req.body);
    const status = Employee.findByIdAndUpdate(id, req.body)
    status.exec((err, data) => {
      if(err)
      res.status(400).send()
      else
      res.send({message: "Updated"})
    })
  })
  
  module.exports = router;
  