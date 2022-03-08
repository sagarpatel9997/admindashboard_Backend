const express = require('express');
const router = express.Router()
const Tech = require("../src/models/tech")


// get tech
router.get("/getTechnology", (req, res) => {
    Tech.find({}, (err,tech) => {
        res.send(tech)
    })
})

// ADD TECHNOLOGY
router.post("/inserttech", (req, res) => {
    const user = new Tech(req.body);
  
    console.log(user);
    console.log(req.body);
    user.save().then(() => {
      res.status(201).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
  
  
  })
  module.exports = router;