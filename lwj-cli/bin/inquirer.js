const inquirer = require('inquirer'); // !可交互的命令行

inquirer
  .prompt([
    // {
    //   type: 'input', // !password
    //   name: 'name',
    //   message: 'your name:',
    //   default: 'default name',
    //   validate: (v) => v === 'lwj', // !返回true才通过
    //   transformer: (v) => 'name:' + v, 
    //   //filter:  // !会改变最终结果
    // },
    // {
    //   type: 'number',
    //   name: 'num',
    //   message: 'your number:',
    // }
    // {
    //   type: 'confirm', // !二选一  true or false
    //   name: 'choice',
    //   message: 'your choice:',
    //   default: false
    // },
    // {
    //   type: 'list', // ! 单选,rawlist 差不多
    //   name: 'choice',
    //   message: 'your choice:',
    //   default: 0, // !index，0开始
    //   //choices: ['a', 'b']
    //   choices: [
    //     {value: 1,name: 'a'},
    //     {value: 2,name: 'b'},
    //     {value: 3,name: 'c'},
    //   ]
    // },
    {
      type: 'checkbox', // ! 多选
      name: 'choice',
      message: 'your choice:',
      default: [1], // !index，0开始
      //choices: ['a', 'b']
      choices: [
        {value: 1,name: 'a'},
        {value: 2,name: 'b'},
        {value: 3,name: 'c'},
      ]
    },
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