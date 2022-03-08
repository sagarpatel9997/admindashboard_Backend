const express = require("express");
const cors = require("cors");
const app = express();
require("./src/db/conn");

const { application } = require("express");
const Users = require("./router/Users");
const Action = require("./router/Action");
const Tech = require("./router/Tech")
const Dep = require("./router/Dep")




const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/users", Users);

app.use("/action", Action);

app.use("/tech", Tech)

app.use("/dep", Dep)







app.listen(port, () => {
  console.log("the server is listinig at: 5000");
})


