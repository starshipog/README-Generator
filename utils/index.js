// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description about your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Add a table of contents.',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'What are the steps for installation of your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the instructions and some examples for use?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Insert your license.',
        name: 'license',
    },
    {
        type: 'input',
        message: 'How can other developers contribute to your project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Provide tests examples for your application.',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Provide a link to your Github and your email address for any additional questions.',
        name: 'questions',
    },
];



// Prompt user with questions
inquirer
    .prompt(questions)
    .then((answers) => {
        // Use answers to write HTML
        const html = getHtml(answers);

        // need to add html in ''
        fs.writeFile('gen.html', html, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Good news, success!");
            }
        });
    });




    const getHtml = (answers) => {
        const { title, description, contents, installation, usage, license, contribute, test, questions } = answers;

        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>README</title>
        </head>
        <body>
            
        
            <table class="table">
                <thead>
                    <tr>
                        <th scope = "col">Title</th>
                        <th scope = "col">Description</th>
                        <th scope = "col">Table of Contents</th>
                        <th scope = "col">Installation</th>
                        <th scope = "col">Usage</th>
                        <th scope = "col">License</th>
                        <th scope = "col">How to contribute</th>
                        <th scope = "col">Test</th>
                        <th scope = "col">Questions?</th>
                    </tr>
                </thead>
        
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td class="p-3 mb-2 bg-success text-black">${title}</td>
                        <td class="p-3 mb-2 bg-success text-black">${description}</td>
                        <td class="p-3 mb-2 bg-success text-black">${contents}</td>
                        <td class="p-3 mb-2 bg-success text-black">${installation}</td>
                        <td class="p-3 mb-2 bg-success text-black">${usage}</td>
                        <td class="p-3 mb-2 bg-success text-black">${license}</td>
                        <td class="p-3 mb-2 bg-success text-black">${contribute}</td>
                        <td class="p-3 mb-2 bg-success text-black">${test}</td>
                        <td class="p-3 mb-2 bg-success text-black">${questions}</td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>
        
        `;
    }



    // title, description, contents, installation, usage, license, contribute, test, questions



// //STARTER CODE FROM CLASS
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README