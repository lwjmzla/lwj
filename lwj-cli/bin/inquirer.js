const inquirer = require('inquirer'); // !可交互的命令行

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'your name:'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch((error) => {
    console.log(error)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });