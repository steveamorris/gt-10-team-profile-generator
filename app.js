const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// 

const employees = [];
function makeEmployee(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Employee's name: ",
            name: "name",
            default: "Steve Morris"
        },
        {
            type: "input",
            message: "Enter Employee's Id Number: ",
            name: "id",
            default: "1234"
        },
        {
            type: "input",
            message: "Enter Employee's Email: ",
            name: "email",
            default: "r3steve@gmail.com"
        },
        {
            type: "list",
            message: "Select Employee's Role: ",
            choices: [
                "Intern",
                "Engineer",
                "Manager"
            ],
            name: "role"
        }
    ]).then(function (empdata){
        console.log(empdata.role);
        const addRole = empdata.role;
        let addQuestions = [];
        if(addRole === "Intern"){
            
            addQuestions = [
                {
                    type: "input",
                    message: "What school do you attend?",
                    name: "school",
                    default: "KSU"
                }
            ]
        }else if(addRole === "Engineer"){
            addQuestions = [
                {
                    type: "input",
                    message: "What is you Github username?",
                    name: "github",
                    default: "steveamorris"
                }
            ]
        }else{
            addQuestions = [
                {
                   type: "input",
                   message: "What is you Office Number?",
                   name: "officeNumber",
                   default: "678-555-1234"
               }
           ]
        };
    
        inquirer.prompt(addQuestions).then(function(addInfo){
            console.log(empdata);
            console.log(addInfo);
            // combine relevant data to create employee
            // push to employees array
            let employee = {};
            if(empdata.role === "Intern"){
                employee = new Intern(empdata.name, empdata.id, empdata.email, addInfo.school);
            }else if(empdata.role === "Engineer"){
                employee = new Engineer(empdata.name, empdata.id, empdata.email, addInfo.github);
            }else{
                employee = new Manager(empdata.name, empdata.id, empdata.email, addInfo.officeNumber);
            };
            employees.push(employee);


            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to enter another Employee?",
                    name: "anotherEntry"
                }
            ]).then(function(moreEntries){
                if (moreEntries.anotherEntry){
                    makeEmployee();

                }else{
                    console.log(employees);
                    makeHtml();
                }
            });
        });
    
    });


};
const temp = [
    {
      name: 'Steve Morris',
      id: '1234',
      email: 'r3steve@gmail.com',
      school: 'KSU'
    },
    {
      name: 'Steve Morris',
      id: '1234',
      email: 'r3steve@gmail.com',
      github: 'steveamorris'
    },
    {
      name: 'Steve Morris',
      id: '1234',
      email: 'r3steve@gmail.com',
      officeNumber: '678-555-1234'
    }
  ];
function makeHtml(){
    render(employees);
};
// makeHtml();



makeEmployee();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
