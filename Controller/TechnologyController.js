const Tech = require("../models/tech")


// get technology controller
exports.getTechnology=(req,res)=>{
    Tech.find({}, (err,tech) => {
        res.send(tech)
    })
}

// insert technology controller
exports.insertTechnology=(req,res)=>{
    const tech = new Tech(req.body);
  
    Tech.find({tech : req.body.tech}, (err,data)=> {
      
      if(data.length == 0) {
    tech.save().then(() => {
     res.status(200).send(tech);
    }).catch(() => {
      res.status(220).send({message:"Technical Error"})
    })
      }
      else{
        res.status(409).send({message:"Technology Already There"})
      }
    })
    
}
