const express = require('express');
const userController = require("../controller/EmployeeController");
const router = express.Router();


// ADD EMPLOYESS 
router.post("/insertEmployee", userController.insertEmployee )

//GET EMPLOYE DATA
router.get("/getEmployee", userController.getEmployee )

// Pagination API
router.get("/getEmployeePage/:page", userController.getEmployeePage )

//DELETE Employee details
router.delete("/deleteEmployee/:id", userController.deleteEmployee)

//UPDATE employee details
router.put("/updateEmployee/", userController.updateEmployee)

//search API
router.get("/searchEmployee/:search", userController.searchEmployee)

module.exports = router;
