const clc = require('cli-color');
var inquirer = require('inquirer');

const success = (text) => console.log(clc.green(text));
const error = (text) => console.log(clc.red(text));

error("great");

inquirer.prompt([{
    type: "list",
    name: "estudios",
    message: "Nivel academico?",
    choices: [
      "Primaria",
      "Secundaria",
      new inquirer.Separator(),
      "Bachillerato",
      "Licenciatura",
      "Doctorado"
     ]
  }]).then(answers => {

});
