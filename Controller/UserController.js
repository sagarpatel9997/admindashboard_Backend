const User = require("../models/user")




// Registration Controller
exports.signUp = (req,res)=>{    
    const email  = req.body.email;
    console.log(req.body);
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        res.status(409).send({ message: "User already there " })
      }
      else if (err) {
        res.status(err.statusCode).send(err)
      } else {
        const newUser = new User(req.body);
        newUser.save().then(() => {
          res.status(200).send(newUser);
        }).catch((e) => {
          console.log(e);
          res.status(400).send(e);
        })
      }
    })
}

//login controller
exports.login = (req,res)=>{
  const {email, password} = req.body
      User.findOne({email:email},(err,User)=>{
        if(User){
          if(password == User.password){        // if admin enter same password then login to dashboard
            //console.log("User")
            res.send({message:"Ok", User: User.email})
          }else{
            res.send({message: "password didnt match"})
          }
        }else{
          res.send({message: " Please Register!! "})
        }
      })
}