const inquirer = require('inquirer');

// array
const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'a',
        message: 'What would you like to do? (Required)',
        validate: aInput => {
            if (aInput) {
                return true;
            } else {     
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'department_table',
        message: 'Insert Table here! (Required)',
    },
    {
        type: 'confirm',
        name: 'confirmAddView',
        message: 'Would you like to do something else?',
        default: false
      },
    {
        type: 'input',
        name: 'b',
        message: 'What would you like to do? (Required)',
        validate: bInput => {
        if (bInput) {
        return true;
        } else {
        return false;
         }
      }
    },
    {
        type: 'input',
        name: 'department',
        message: 'What is the name of the department you want to add? (Required)',
        validate: departmentInput => {
            if (departmentInput ) {
            return true;
            } else {
            return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'save',
        message: 'Would you like to save this update?',
        default: false
    },
    {
     type: 'confirm',
     name: 'confirmAddDepartment',
     message: 'Would you like to do another update?',
     default: false
},
{
    type: 'input',
    name: 'c',
    message: 'What would you like to do? (Required)',
    validate: cInput => {
        if (cInput) {
            return true;
        } else {     
            return false;
        }
    }
},
{
    type: 'input',
    name: 'role_table',
    message: 'Insert Table here! (Required)',
},
{
    type: 'input',
    name: 'role',
    message: 'What is the name of the role you want to add? (Required)',
    validate: roleInput => {
    if (roleInput) {
        return true;
    } else {
        return false;
         }
    }
},
{
    type: 'input',
    name: 'salary',
    message: 'What is the salary for the new role ? (Required)',
    validate: salaryInput => {
    if (salaryInput) {
        return true;
    } else {
        return false;
         }
    }
},
{
    type: 'input',
    name: 'belong',
    message: 'What department does this role belong to? (Required)',
    validate: belongInput => {
        if (belongInput) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'store',
    message: 'Would you like to save this update?',
    default: false
},
{
    type: 'confirm',
    name: 'confirmAddRole',
    message: 'Would you like to do another update?',
    default: false
  },
  {
    type: 'input',
    name: 'd',
    message: 'What would you like to do? (Required)',
    validate: dInput => {
        if (dInput) {
            return true;
        } else {     
            return false;
        }
    }
},
{
    type: 'input',
    name: 'employee_table',
    message: 'Insert Table here! (Required)',
},
{
    type: 'confirm',
    name: 'third',
    message: 'Would you like to do something else?',
    default: false
  },
{
    type: 'input',
    name: 'e',
    message: 'What would you like to do? (Required)',
    validate: eInput => {
        if (eInput) {
            return true;
        } else {     
            return false;
        }
    }
},
{
    type: 'input',
    name: 'first_name',
    message: 'What is the employee first name? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'input',
    name: 'last_name',
    message: 'What is the employee last name? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'input',
    name: 'assign',
    message: 'Which role would you like to assign the selected employee? (Required)',
    validate: assignInput => {
        if ( assignInput) {
            return true;
        } else {
          
            return false;
        }
    }
},
{
    type: 'input',
    name: 'assign_role',
    message: 'Who is the  selected employee manager? (Required)',
    validate: assign_roleInput => {
        if ( assign_roleInput) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'saves',
    message: 'Would you like to save this update?',
    default: false
  },
  {
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: 'Would you like to do another update?',
    default: false
  },
  {
    type: 'input',
    name: 'u',
    message: 'What would you like to do? (Required)',
    validate: uInput => {
        if (uInput) {
            return true;
        } else {     
            return false;
        }
    }
}, 
{
    type: 'input',
    name: 'eUpdate',
    message: 'What is the name of the employee you want to update? (Required)',
    validate: eUpdate_Input => {
        if (eUpdate_Input) {
            return true;
        } else {     
            return false;
        }
    }
},
{
    type: 'input',
    name: 'role_update',
    message: 'What is employee new role? (Required)',
    validate: dInput => {
        if (dInput) {
            return true;
        } else {     
            return false;
        }
    }
}
]);
};

var promptProject = hrmData  => {
  if (!hrmData.projects) {
  hrmData.projects = [];
  }
  console.log(`
=================
Add a New Project
=================
`);
return inquirer.prompt([

])

then(projectData => {
    hrmData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(hrmData);
    } else {
      return hrmData;
    }
  });
};

promptUser()
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers));
