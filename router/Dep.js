const express = require('express');
const router = express.Router()
const userController = require("../Controller/DepartmentController")

//get department api 
router.get("/getDepartment", userController.getDepartment)


// ADD DEPARTMENT api
router.post("/insertdep", userController.insertDepartment )
  module.exports = router;