// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "name",
    message: "Enter your first and last name",
    validate: nameInput => {
        if (nameImput) {
            return true;
        } else {
            console.log("Enter your last and first name");
            return false;
        }
    }
},
{
    type: "input",
    name: "gitHub",
    message: "Enter your GitHub username",
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log("Enter your GitHub account");
            return false
        }
    }
},
{
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Provide your email address:");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'title',
    message: 'Enter a title for you project',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Enter a unique title for your project');
            return false;
        }
    }
},
{
    type: "input",
    name: "description",
    message: "Enter your description for your project",
    validate: descripionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log("Enter your project description");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'How is this application installed?',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Include instructions for the applications are installed.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Give instructions and examples for use.',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please provide Usage Instructions.');
            return false;
        }
    }
}, {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('Include instructions for project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Describe the tests writen for your application and their usage',
    validate: testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log('Test writen for application');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmLicenses',
    message: 'Would you like to include a license?',
    default: false
},
{
    type: 'list',
    name: 'licenses',
    message: 'What license would you like to include?',
    choices: ['MIT', 'GPL', 'CC--0'],
    when: ({ confirmLicenses }) => {
        if (confirmLicenses) {
            return true;
        } else {
            return false;
        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(".folder/README.md", data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: console.log('Working Properly')
            });
        })
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then(readmeInfo => {
        return writeToFile(readmeInfo);
    })
    .catch(err => {
        console.log(err);
    });
