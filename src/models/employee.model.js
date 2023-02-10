module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    id: {
      primaryKey: true,
      type: Sequelize.STRING,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
    },
    designation: {
      type: Sequelize.STRING,
    },
  });

  return Employee;
};
