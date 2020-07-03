switch (empdata.role){
    case "Intern":
        inquirer.prompt([
            {
                type: "input",
                message: "What school do you attend?",
                name: "school"
            }
        ]).then(function(intdata){
            console.log(intdata);
        });
    case "Engineer":
        inquirer.prompt([
            {
                type: "input",
                message: "What is you Github username?",
                name: "github"
            }
        ]).then(function(engdata){
            console.log(engdata);
        });
    case "Manager":
        inquirer.prompt([
             {
                type: "input",
                message: "What is you Office Number?",
                name: "officeNumber"
            }
        ]).then(function(mandata){
                console.log(mandata);
        });

    default:
        console.log("Default");

}


switch (empdata.role){
    case "Intern":
        const addQuestions = [
            {
                type: "input",
                message: "What school do you attend?",
                name: "school"
            }
        ];

    case "Engineer":
        const addQuestions = [
            {
                type: "input",
                message: "What is you Github username?",
                name: "github"
            }
        ];
    case "Manager":
        const addQuestions = [
             {
                type: "input",
                message: "What is you Office Number?",
                name: "officeNumber"
            }
        ];

    default:
        console.log("Default");

}




switch (addRole){
    case "Intern":
        addQuestions = [
            {
                type: "input",
                message: "What school do you attend?",
                name: "school",
                default: "KSU"
            }
        ];

    case "Engineer":
        addQuestions = [
            {
                type: "input",
                message: "What is you Github username?",
                name: "github",
                default: "steveamorris"
            }
        ];
    case "Manager":
        addQuestions = [
             {
                type: "input",
                message: "What is you Office Number?",
                name: "officeNumber",
                default: "678-555-1234"
            }
        ];

    default:
        console.log("Default");

}