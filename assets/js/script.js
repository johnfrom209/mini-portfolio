const fs = require('fs');
const inquirer = require('inquirer');
const axios = require("axios");

const generateHtml = (survey) =>
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
        <a class="btn btn-primary btn-lg" href="#" role="button">Generate</a>
    </div>

    <ul class="list-group col-4 d-flex justify-content-center ">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
    </ul>

</body>

</html>`


// const questions = [
//     {
//         name: ''
//     }
// ]