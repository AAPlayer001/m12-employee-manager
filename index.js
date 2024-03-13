const { promt } = require("inquirer");
const db = require("db");

function mainPrompt() {
  prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      options: [
        {
          name: "View All Employees",
          option: "VIEW_EMPLOYEES",
        },
        {
          name: "View All Employees (By Department)",
          option: "VIEW_EMPLOYEES_BY_DEPARTMENT",
        },
        {
          name: "Add Employee",
          option: "ADD_EMPLOYEE",
        },
        {
          name: "Remove Employee",
          option: "REMOVE_EMPLOYEE",
        },
        {
          name: "Update Employee Role",
          option: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Update Employee Manager",
          option: "UPDATE_EMPLOYEE_MANAGER",
        },
        {
          name: "View Roles",
          option: "VIEW_ROLES",
        },
        {
          name: "Add Role",
          option: "ADD_ROLE",
        },
        {
          name: "Remove Role",
          option: "REMOVE_ROLE",
        },
        {
          name: "View Departments",
          option: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add Department",
          option: "ADD_DEPARTMENT",
        },
        {
          name: "Remove Department",
          option: "REMOVE_DEPARTMENT",
        },
        {
          name: "Exit",
          option: "QUIT",
        },
      ],
    },
  ]).then((response) => {
    let option = response.option;

    if (option === "VIEW_EMPLOYEES") {
      viewEmployees();
    } else if (option === "VIEW_EMPLOYEES_BY_DEPARTMENT") {
      viewEmployeesByDepartment();
    } else if (option === "FIND_ALL_MANAGERS") {
    } else if (option === "ADD_EMPLOYEE") {
    } else if (option === "REMOVE_EMPLOYEE") {
    } else if (option === "UPDATE_EMPLOYEE_ROLE") {
    } else if (option === "VIEW_ROLES") {
    } else if (option === "ADD_ROLE") {
    } else if (option === "REMOVE_ROLE") {
    } else if (option === "VIEW_DEPARTMENTS") {
    } else if (option === "ADD_DEPARTMENT") {
    } else if (option === "REMOVE_DEPARTMENT") {
    } else if (option === "QUIT") {
      quit();
    } else {
      quit();
    }
  });
}

async function viewEmployees() {
  const [rows] = await db.findAllEmployees();
  console.table(rows);
  mainPrompt();
}

async function viewEmployeesByDepartment() {
  const [departments] = await db.findAllDepartments();
  const depChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
  prompt([
    {
      type: "list",
      name: "departmentId",
      message: "Select the department to view:",
      options: depChoices,
    },
  ])
    .then(async (response) => {
      const [rows] = await db.findAllEmployeesByDepartment(
        response.departmentID
      );
      console.table(rows);
    })
    .then(() => mainPrompt());
}

async function addEmployee() {
    prompt([
        {
            name: "first_name",
            message: "Enter employee's first name:"
        },
        {
            name: "last_name",
            message: "Enter employee's last name:"
        },

    ]),then(async (response) => {
        let firstName = response.first_name;
        let lastName = response.last_name;

        const [rows] = await db.findAllRoles();
        const roleChoices = rows.map(({id, title}) => ({
            name: title,
            value: id
        }));
    });
}

function quit() {
  console.log("Exiting System...");
  process.exit();
}

function init() {
  mainPrompt();
}

init();
