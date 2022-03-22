const Employee = require('../models/employee');


// add employee controller 
exports.insertEmployee=(req,res)=>{
    const employee = new Employee(req.body);
  console.log(req.body);
  employee.save().then(() => {
   
   res.status(200).send(employee)

   }).catch((err) => {
  
    res.status(409).send({message: "User Already There"});
  })
}


// get employee controller
exports.getEmployee=(req,res)=>{
    Employee.find({}, function (err, employees) {
        if (err) {
          res.send(err)
        }
        else {
          res.send(employees)
        }
      });
      
}

//pagination and get employee data with pagination
exports.getEmployeePage=(req,res)=>{
    let page = req.params.page
    let limit = 5;
    let skipRow = page * limit
    Employee.find({}, function (err, employees) {
      // res.send(employees);
      if (err) {
        res.send(err)
      }
      else {
        res.send(employees)
      }
    }).limit(limit).skip(skipRow);
}

//delete Employee controller
exports.deleteEmployee=(req,res)=>{
    const id = req.params.id
    console.log(id)
    DeleteData = Employee.findByIdAndDelete(id);
    DeleteData.exec(function (err, data) {
      if (err) throw err;
      res.send("deleted")
    })
}

//update employee controller
exports.updateEmployee=(req,res)=>{
    const status = Employee.findByIdAndUpdate(req.body._id, req.body)
    status.exec((err, data) => {
      if (err)
        res.status(400).send(err)
      else
        res.send({ message: "Updated" })
    })
}

// search controller 
exports.searchEmployee=(req,res)=>{
    var name = req.params.search
  Employee.find({name: name}, (err, empl) => {
    if (err) {
      res.status(404).send(err)
    }
    else {
      res.send(empl)
    }
  });
}