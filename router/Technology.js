const express = require('express');
const router = express.Router()
const userController = require("../controller/TechnologyController");


// get tech
router.get("/getTechnology", userController.getTechnology )
  

// ADD TECHNOLOGY
router.post("/insertTech", userController.insertTechnology  )
module.exports = router;