const express = require('express');
const router = express.Router()
const Dep = require("../src/models/dep")


router.get("/getDepartment", (req, res) => {
    Dep.find({}, (err,dep) => {
        res.send(dep)
    })
})


// ADD TECHNOLOGY
router.post("/insertdep", (req, res) => {
    const user = new Dep(req.body);
  
    console.log(user);
    console.log(req.body);
    user.save().then(() => {
      res.status(201).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
  
  
  })
  module.exports = router;