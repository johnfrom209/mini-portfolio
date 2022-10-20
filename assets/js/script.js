const fs = require('fs');
const inquirer = require('inquirer');
const axios = require("axios");

const generateHtml = (answers) =>
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Mini Portfolio</title>
</head>

<body>
    <div class="jumbotron text-center">
        <h1 class="display-4">Hello, want to generate a portfolio?!</h1>
        <p class="lead">Answer some questions and the javascript will take care of the rest.</p>
        <hr class="my-4">
        <!-- <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> -->
        
    </div>

    <ul class="list-group col-4 d-flex justify-content-center ">
        <li class="list-group-item">Name: ${answers.name}</li>
        <li class="list-group-item">Loaction: ${answers.location}</li>
        <li class="list-group-item">Bio: ${answers.bio}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedIn}</li>
        <li class="list-group-item">Github: ${answers.github}</li>
    </ul>

</body>

</html>`


const questions = [
    {
        name: 'name',
        message: 'What is your name?'
    },
    {
        name: 'location',
        message: 'Where are you located?'
    },
    {
        name: 'bio',
        message: 'Give a quick bio of yourself.'
    },
    {
        name: 'linkedIn',
        message: 'What is your LinkedIn url?'
    },
    {
        name: 'github',
        message: 'What is your github url'
    },
]

inquirer
    .prompt(questions)
    .then((answers) => {
        const htmlPage = generateHtml(answers);

        fs.writeFile('index.html', htmlPage, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    })