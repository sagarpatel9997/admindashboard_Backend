const express = require('express');
const router = express.Router()
const Register = require("../src/models/register")


//Register Data

router.post("/sign", (req, res) => {

    const email  = req.body.email;
    Register.findOne({ email: email }, (err, user) => {
      if (user) {
        res.status(409).send({ message: "user already there " })
      }
      else if (err) {
        res.status(err.statusCode).send(err)
      } else {
        const newUser = new Register(req.body);
        newUser.save().then(() => {
          res.status(201).send(newUser);
        }).catch((e) => {
          console.log(e);
          res.status(400).send(e);
        })
      }
    })
  })

  //LOGIN MODULE

router.post("/login",(req,res)=>{
    const {email, password} = req.body
    Register.findOne({email:email},(err,user)=>{
      if(user){
        if(password == user.password){        // if admin enter same password then login to dashboard
          //console.log("user")
          res.send({message:"Login Succesfull", user: user})
        }else{
          res.send({message: "password didnt match"})
        }
      }else{
        res.send({message: "User Not Register"})
      }
    })
  })
  
  module.exports = router;