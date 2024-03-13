const connection = require("./connection");

function DB() {
  this.connection = connection;
}

DB.prototype.findAllEmployees = async function () {
  const data = await this.connection.promise().query(`SELECT 
  employee.id,
  employee.first_name,
  employee.last_name,
  role.title,
  department.name AS department,
  role.salary
  FROM employee
  INNER JOIN role on employee.role_id = role.id
  INNER JOIN department on role.department_id = department.id;`);
  return data;
};

DB.prototype.findAllEmployeesByDepartment = async function (departmentID) {
  const data = await this.connection.promise().query(
    ` SELECT
  employee.id,
  employee.first_name,
  employee.last_name,
  role.title
  FROM employee
  INNER JOIN role on employee.role_id = role.id
  INNER JOIN department on role.department_id = department.id
  WHERE department.id = ?`,
    departmentID
  );
  return data;
};

DB.prototype.findAllDepartments = async function () {
  const data = await this.connection.promise().query(`SELECT
  * FROM DEPARTMENTS`);
  return data;
};

DB.prototype.findAllRoles = async function () {
  const data = await this.connection.promise().query(`SELECT
    * FROM role`);
  return data;
};

DB.prototype.findAllManagers = async function (employeeId) {
  const data = await this.connection.promise().query(
    `SELECT 
  id, first_name, last_name 
  FROM employee WHERE id != ?`,
    employeeId
  );
  return data;
};

DB.prototype.makeEmployee = async function (employee) {
  const data = await this.connection
    .promise()
    .query(`INSERT INTO employee SET ?`, employee);
  return data;
};

DB.prototype.deleteEmployee = async function (employeeID) {
  const data = await this.connection
    .promise()
    .query(`DELETE FROM employee SET ?`, employeeId);
  return data;
};

DB.prototype.updateEmployeeRole = async function (employeeId, roleId) {
  const data = await this.connection.promise().query(
    `UPDATE 
    employee SET role_id = ? 
    WHERE id = ?`,
    [roleId, employeeId]
  );
  return data;
};

DB.prototype.updateEmployeeManager = async function (employeeId, managerId) {
  const data = await this.connection
    .promise()
    .query(`UPDATE emplopyee SET manager_id = ? WHERE id = ?`, [
      managerId,
      employeeId,
    ]);
  return data;
};

DB.prototype.makeDepartment = async function (department) {
  const data = await this.connection
    .promise()
    .query(`INSERT INTO department SET ?`, department);
  return data;
};

DB.prototype.deleteDepartment = async function (departmentId) {
  const data = await this.connection
    .promise()
    .query(`DELETE FROM department WHERE id = ?`, departmentId);
  return data;
};

module.exports = new DB();
