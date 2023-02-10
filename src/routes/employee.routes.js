const express = require("express");
const employeeController = require("../controllers/employee.controller");
const Joi = require("Joi");
const validator = require("express-joi-validation").createValidator();

const router = express.Router();

const schema = Joi.object({
  designation: Joi.string().required(),
});

console.log("In Routes");
router.post("/employee", employeeController.createEmployee);
router.get("/employee/:id", employeeController.getEmployeeByID);
router.delete("/employee/:id", employeeController.deleteEmployeeByID);
router.patch(
  "/employee/:id",
  validator.body(schema),
  employeeController.updateDesignation
);

module.exports = router;
