const employeeRepository = require("../repositories/employee.repository");

exports.createEmployee = async (req, res) => {
  console.log("EmployeeService.createEmployee");
  const body = req.body;
  try {
    const result = await employeeRepository.createEmployee(body);
    res.status(201).send(result);
  } catch (error) {
    console.error("EmployeeService.createEmployee Error:", error);
    res
      .status(500)
      .send({ errorMessage: "INTERNAL_SERVER_ERROR", error: error });
  }
};

exports.getEmployeeByID = async (req, res) => {
  console.log("EmployeeService.getEmployeeByID");
  const id = req.params.id;
  try {
    const result = await employeeRepository.getEmployeeByID(id);
    // console.log("result:", result.dataValues);

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ errorMessage: "Employee not found" });
    }
  } catch (error) {
    console.error("EmployeeService.getEmployeeByID Error:", error);
    res
      .status(500)
      .send({ errorMessage: "INTERNAL_SERVER_ERROR", error: error });
  }
};

exports.deleteEmployeeByID = async (req, res) => {
  console.log("EmployeeService.deleteEmployeeByID");
  const id = req.params.id;
  try {
    const result = await employeeRepository.deleteEmployeeByID(id);
    console.log("result:", result);
    // if (result) {
    res.sendStatus(200).send(result);
    // } else {
    //   res.status(404).send({ errorMessage: "Employee not found" });
    // }
  } catch (error) {
    console.error("EmployeeService.deleteEmployeeByID Error:", error);
    res
      .status(500)
      .send({ errorMessage: "INTERNAL_SERVER_ERROR", error: error });
  }
};

exports.updateDesignation = async (req, res) => {
  console.log("EmployeeService.updateDesignation");
  const id = req.params.id;
  const body = req.body;
  try {
    const result = await employeeRepository.updateDesignation(id, body);
    console.log("result:", result);

    res.sendStatus(200).send(result);
  } catch (error) {
    console.error("EmployeeService.updateDesignation Error:", error);
    res
      .status(500)
      .send({ errorMessage: "INTERNAL_SERVER_ERROR", error: error });
  }
};
