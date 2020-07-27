const generatePage = require('./utils/generate-readme.js'); // checking to write file
const inquirer = require('inquirer');
const generateMarkdown = require('./src/readme-template');



// array of questions for user
//const questions = [];



// function to initialize program
function promptQuestions() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'Title',
                message: 'What is the title of your README? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter title name!');
                        return false;
                    }
                }
            },
            { // description
                type: 'confirm',
                name: 'confirmDescription',
                message: 'Would you like a description?',
                default: true
            },
            {
                type: 'input',
                name: 'Description',
                message: 'Please write your description here:',
                when: ({ confirmDescription }) => confirmDescription
            },
            { // table of contents
                type: 'confirm',
                name: 'confirmTable',
                message: 'Would you like a table of contents?',
                default: true
            },
            { // installation
                type: 'confirm',
                name: 'confirmInstallation',
                message: 'Would you like an Installation section?',
                default: true
            },
            {
                type: 'input',
                name: 'Installation',
                message: 'Please write your Installation here:',
                when: ({ confirmInstallation }) => confirmInstallation
            },
            { // usage
                type: 'confirm',
                name: 'confirmUsage',
                message: 'Would you like a Usage section?',
                default: true
            },
            {
                type: 'input',
                name: 'Usage',
                message: 'Please write your Usage section here:',
                when: ({ confirmUsage }) => confirmUsage
            },
            { // credits
                type: 'confirm',
                name: 'confirmCredits',
                message: 'Would you like a Credits section',
                default: true
            },
            {
                type: 'input',
                name: 'Credits',
                message: 'Please write your Credits section here:',
                when: ({ confirmCredits }) => confirmCredits
            },
            { // license
                type: 'confirm',
                name: 'confirmLicense',
                message: 'Would you like a License section?',
                default: true
            },
            {
                type: 'list',
                name: 'License',
                message: 'Please select a license: ',
                choices: [
                    'Apache',
                    "GNU GPLv3",
                    "ISC",
                    "MIT",
                ],
                when: ({ confirmLicense }) => confirmLicense
            },
            // { // badges
            //     type: 'confirm',
            //     name: 'confirmBadge',
            //     message: 'Would you like to include a Badge?',
            //     default: true
            // },
            // {
            //     type: 'input',
            //     name: 'description',
            //     message: 'Please write your Badge info here:',
            //     when: ({confirmBadge}) => confirmBadge
            // },
            { // contributing
                type: 'confirm',
                name: 'confirmContributing',
                message: 'Would you like a Contribution page?',
                default: true
            },
            {
                type: 'input',
                name: 'Contribution',
                message: 'Please write your Contribution section here:',
                when: ({ confirmContributing }) => confirmContributing
            },
            { // tests
                type: 'confirm',
                name: 'confirmTests',
                message: 'Would you like a Test section?',
                default: true
            },
            {
                type: 'input',
                name: 'Test',
                message: 'Please write your Test section here:',
                when: ({ confirmTests }) => confirmTests
            },
        ])
}

// function call to initialize program
promptQuestions()
.then(data => {
    return generateMarkdown(data);
})
.then(readmePage => {
    console.log(readmePage)
    return writeFile(readmePage);
}).catch(err => {
    console.log(err);
});
