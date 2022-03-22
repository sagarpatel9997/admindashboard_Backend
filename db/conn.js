const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Employees",{
        //useCreateIndex:true,
        //useNewUrlParser:true,
        //useUnifiedTopology:true
}).then(()=>{
    console.log("connection is succesfull");
}).catch((e)=>{
    console.log("no connection");
})

