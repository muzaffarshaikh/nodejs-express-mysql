const databaseService = require("../services/db.service");

exports.createEmployee = async (body) => {
  console.log("EmployeeRepository.createEmployee");
  try {
    console.log("body:", body);
    const result = await databaseService.Employee.create(body);
    console.log("result:", result);
    return result;
  } catch (error) {
    console.error("EmployeeRepository.createEmployee Error:", error);
    throw error;
  }
};

exports.getEmployeeByID = async (id) => {
  console.log("EmployeeRepository.getEmployeeByID");
  try {
    const result = await databaseService.Employee.findOne({
      where: {
        id: id,
      },
    });
    console.log("result:", result);
    return result;
  } catch (error) {
    console.error("EmployeeRepository.getEmployeeByID Error:", error);
    throw error;
  }
};

exports.deleteEmployeeByID = async (id) => {
  console.log("EmployeeRepository.deleteEmployeeByID");
  try {
    const result = await databaseService.Employee.destroy({
      where: {
        id: id,
      },
    });
    console.log("result:", result);
    return result;
  } catch (error) {
    console.error("EmployeeRepository.deleteEmployeeByID Error:", error);
    throw error;
  }
};

exports.updateDesignation = async (id, body) => {
  console.log("EmployeeRepository.updateDesignation");
  try {
    const result = await databaseService.Employee.update(body, {
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("EmployeeRepository.updateDesignation Error:", error);
    throw error;
  }
};
