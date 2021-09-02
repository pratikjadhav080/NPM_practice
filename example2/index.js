var inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type:"input",
        message:"Enter your username",
        name:"username"
    },
    {
        type:"password",
        message:"Enter your password",
        mask:"*",
        name:"password"
    },
  ])
  .then((userdetails) => {
    console.log("Welcome:",userdetails.username)

    inquirer.prompt([
        {
            type:"confirm",
            message:"Do you want Pizzas to be delivered",
            name:"fordelivery",
            default:true,
        },
        {
            type:"input",
            message:"Enter your phone number?",
            name:"phone",

            validate(value){
                const pass = value.length===10;
                if(pass){
                    return true;
                }
                return "Please enter a valid phone number"
            }
        },
        {
            type:"input",
            message:"How many pizzas do you want?",
            name:"qty",

            validate(value){
                const valid = !isNaN(parseInt(value))
                return valid || "Please enter a valid phone number"
            },
            filter(value){
                const v = parseInt(value)
                return v
            }
        },
        {
            type:"list",
            message:"Please select yur pizza topping?",
            name:"toppings",
            choices:[
                "paneer",
                "chicken",
                "Corn and Paneer",
                "Veg loaded"
            ]
        },
        {
            type:"list",
            message:"Please select your pizza size?",
            name:"size",
            choices:[
                "small",
                "medium",
                "large",
            ]
        },
    ])
    .then((user_order) => {
        console.log(user_order)
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });

