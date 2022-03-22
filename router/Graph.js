const express = require('express');
const userController = require("../controller/GraphController");
const router = express.Router()

router.get('/age', userController.age)  // api for getting employee age 
router.get('/salary', userController.salary )   // api for getting employee age 
   
module.exports = router;