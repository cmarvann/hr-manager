const inquirer = require('inquirer');

// array
const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter employee name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'role',
        message: 'What is the employee role? (Required)',
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('Enter employee role!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'manager',
        message: 'Who is the employee manager? (Required)',
        validate: managerInput => {
            if (managerInput) {
                return true;
            } else {
                console.log('Enter employee manager!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'update',
        message: 'What would you like to do? (Required)',
        validate: updateInput => {
            if (updateInput) {
                return true;
            } else {
                console.log('Enter what you would like to do!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: 'Which employee role would you like to update (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Enter employee name you want ot update!');
                return false;
            }
        }
    },
    {
    type: 'input',
    name: 'assign',
    message: 'which role would you like to assign the selected employee? (Required)',
    validate: assignInput => {
        if ( assignInput) {
            return true;
        } else {
            console.log('Enter the assigned role!');
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
    name: 'confirmAddUpdate',
    message: 'Would you like to do another update?',
    default: false
  }
]);
};

promptUser().then(answers => console.log(answers));

const promptProject = hrmData  => {
  if (!hrmData.projects) {
  hrmData.projects = [];
  }
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
        type: 'input',
        name: 'to_do',
        message: 'what would you like to do? (Required)',
        validate: to_doInput => {
            if (to_doInput) {
                return true;
            } else {
                console.log('Enter what you would liek to do!');
                return false;
            }
        }
    },
   
    {
      type: 'input',
      name: 'to_do',
      message: 'What would you like to do? (Required)',
      validate: to_doInput => {
        if (to_doInput) {
          return true;
        } else {
          console.log('Enter what you would like to do!');
          return false;
        }
      }
    }
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
