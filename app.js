const express = require("express");
const cors = require("cors");
const app = express();
require("./db/conn");

const { application } = require("express");
const UserRouter = require("./router/User");
const EmployeeRouter = require("./router/Employee");
const TechnologyRouter = require("./router/Technology")
const DepartmentRouter = require("./router/Dep")
const GraphRouter= require("./router/Graph")





const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/user", UserRouter);

app.use("/employee", EmployeeRouter);

app.use("/tech", TechnologyRouter)

app.use("/dep", DepartmentRouter)

app.use("/graphData", GraphRouter)


app.listen(port, () => {
  console.log("the server is listinig at: 5000");
})


