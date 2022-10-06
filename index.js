const inquirer = require('inquirer');


  
// array
const promptUser = () => {
    return inquirer.prompt([

      {

      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices:
       [ 
        "View All Departments",
        "Add Department",
        "View All Employee", 
        "Add Employees", 
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "All Employee",
        "Update Employee Role",
        "Engineer",
        "Finanace",
        "Legal", 
        "Sales",
        "Service",
        "Customer Service"
    ]
    },
    {
        type: 'input',
        name: 'abc',
        message: 'Would you like to do ? ',
    },
    
    // {
    //     type: 'input',
    //     name: 'cde',
    //     message: 'Would you like to do ? ',
    // },
    {
      type: 'input',
      name: 'department',
      message: 'What is the name of the department? (Required)',
      validate: departmentInput => {
        if (departmentInput) {
            return true;
        } else {
            console.log('Enter department!');
            return false;
        }
      }
    },
    {
        type: 'input',
        name: 'update',
        message: 'Would you like to save this update ? ',
    }
  ])
};


promptUser().then(answers => console.log(answers));

const promptUpdate = hrmData  => {
  if (!hrmData.updates) {
  hrmData.updatess = [];
  }
  console.log(`
=================
Add a New Update
=================
`);
  return inquirer.prompt([
   {
    type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices:
       [ 
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "Update Employee Role",
        "Customer Service"
    ]
    },
    // {
    //     type: 'input',
    //     name: 'efg',
    //     message: 'Would you like to do ? ',
    // },
    

    {
        type: 'input',
        name: 'roles',
        message: 'What is the name of the role you want to add? (Required)',
        validate: rolesInput => {
          if (rolesInput) {
              return true;
          } else {
              console.log('Enter Role!');
              return false;
          }
        }
    },

    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the new role? ',
    },
    {
        type: 'input',
        name: 'belong',
        message: 'Which department does this role belong to? ',
    },
    {
        type: 'input',
        name: 'update1',
        message: 'Would you like to save this update ? ',
    },

    {

        type: "list",
        name: "choice3",
        message: "What would you like to do?",
        choices:
         [ 
          "Add Employee", 
          "Add Role", 
          "Update Employee Role",
         
      ]
      },
    // {
    //     type: 'input',
    //     name: 'ghi',
    //     message: 'Would you like to do ? ',
    // },
    {
        type: 'input',
        name: 'firstname',
        message: 'What is the employee first name?  ',
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'What is the employee last name? ',
    },
    {
        type: 'input',
        name: 'newrole',
        message: 'What is the employee role?  ',
    },
    {
        type: 'input',
        name: 'eemanager',
        message: 'Who is the employee manager? ',
        validate: eemanagerInput => {
            if (eemanagerInput) {
                return true;
            } else {
                console.log('Manager');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'update2',
        message: 'Would you like to save this update ? ',
    },
    
    {

            type: "list",
            name: "change",
            message: "What would you like to do?",
            choices:
             [ 
              
              "Update Employee Role",
              "View All Roles",
              "Add Role",
              
              
          ]
    },

    {
        type: 'input',
        name: 'roleupdate',
        message: 'Which employee role do you want to update?  (Required)',
        validate: roleupdateInput => {
            if (roleupdateInput) {
                return true;
            } else {
                console.log('update Sam');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'assign',
        message: 'Which role do you want to assign the selected employee?  ',
        validate: assignInput => {
            if (assignInput) {
                return true;
            } else {
                console.log('Sales Lead');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'update3',
        message: 'Would you like to save this update ? ',
    },
    {
        type: 'input',
        name: 'ijk',
        message: 'Would you like to do another update? ',
    }
    
  ]
    )

then(updateData => {
    hrmData.projecs.push(projectData);
    if (updateData.confirmAddUpdate) {
      return promptUpdate(hrmData);
    } else {
      return hrmData;
    }
  });
};


promptUser()
  .then(promptUpdate)
  .then(updateAnswers => console.log(updateAnswers));




