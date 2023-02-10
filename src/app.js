const express = require("express");
const config = require("./config/config");
const employeeRouter = require("./routes/employee.routes");
const bodyParser = require("body-parser");
const databaseService = require("./services/db.service");
require("dotenv").config();

// databaseService.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync DB");
// });

const app = express();
const port = config.port;

app.use(bodyParser.urlencoded({}));
app.use(bodyParser.json());

app.use(employeeRouter);

app.listen(port, () => {
  console.log("Listening on port:", port);
});
