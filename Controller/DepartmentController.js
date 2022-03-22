const Dep = require('../models/dep');

//get department controller
exports.getDepartment=(req,res)=>{
    Dep.find({}, (err,dep) => {
        res.send(dep)
    })
}

// insert department controller 
exports.insertDepartment=(req,res)=>{
    const dep = new Dep(req.body);
  
  Dep.find({dep : req.body.dep}, (err,data)=> {
    
    if(data.length == 0) {
  dep.save().then(() => {
   res.status(200).send(dep);
  }).catch(() => {
    res.status(220).send({message:"Technical Error"})
  })
    }
    else{
      res.status(409).send({message:"Department  Already There"})
    }
  })
  

}