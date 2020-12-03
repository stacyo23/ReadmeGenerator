//constants requiring the script file export, the inquirer dependency, and file system library
const generateMarkdown = require('./utils/generateMarkdown'); 
const inquirer = require('inquirer');
const fs = require('fs');

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Success!')); 
        
}

// function to initialize program
function init() {
    //initializes command-line questions
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub user name?',
      },
      {
        type: 'input',
        message: 'What is your contact email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please provide a brief description of the application.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please specify any necessary installations.',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Please describe how the application will be used.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Did anyone assist in building the application?',
        name: 'credits',
      },
      {
        type: "list",
        name: "license",
        message: "Select a license for your README file.",
        choices: ["GNU GPL v2", "GNU GPL v3", "GNU LGPL v3", "MIT", "No License"]
    },
    ])
    .then(response => {

  //runs responses through the generateMarkdown text that was imported from the other script page     
  const responses = generateMarkdown(response);  
 
  //calls the write function with title of md and responses run through the generate Markdown text
  writeToFile("newReadMe.md", responses); 
    });
  
}

// function call to initialize questions
init();
