var inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            message: "Enter your username",
            name: "username"
        },
        {
            type: "password",
            message: "Enter your password",
            mask: "*",
            name: "password"
        },
    ])
    .then((userdetails) => {
        console.log("Welcome:", userdetails.username)

        inquirer.prompt([
            {
                type: "confirm",
                message: "Do you want Pizzas to be delivered",
                name: "fordelivery",
            }])
            .then((confirmation) => {
                if (confirmation.fordelivery) {
                    console.log(confirmation.fordelivery)
                    inquirer.prompt([
                        {
                            type: "input",
                            message: "Enter your address?",
                            name: "address",
                        },
                        {
                            type: "input",
                            message: "Enter your phone number?",
                            name: "phone",

                            validate(value) {
                                const pass = value.length === 10;
                                if (pass) {
                                    return true;
                                }
                                return "Please enter a valid phone number"
                            }
                        },
                        {
                            type: "input",
                            message: "How many pizzas do you want?",
                            name: "qty",

                            validate(value) {
                                const valid = !isNaN(parseInt(value))
                                return valid || "Please enter a valid number"
                            },
                            filter(value) {
                                const v = parseInt(value)
                                return v
                            }
                        },
                        {
                            type: "list",
                            message: "Please select yur pizza topping?",
                            name: "toppings",
                            choices: [
                                "paneer",
                                "chicken",
                                "Corn and Paneer",
                                "Veg loaded"
                            ]
                        },
                        {
                            type: "list",
                            message: "Please select your pizza size?",
                            name: "size",
                            choices: [
                                "small",
                                "medium",
                                "large",
                            ]
                        },
                    ])
                        .then((user_order) => {
                            if(user_order.size == "small"){
                                var price = "100"
                            }else if(user_order.size == "medium"){
                                var price = "200"
                            }else{
                                var price = "300"
                            }

                            console.log("Your pizza price:",price*user_order.qty)

                            inquirer
                                .prompt([
                                    {

                                        type:"confirm",
                                        message:"kindly confirm the pizza order",
                                        name:"confirm_price"
                                    },
                                ])
                                .then((confirmation) =>{
                                    if(confirmation.confirm_price){
                                        console.log("Your order has been placed")
                                        console.log("Your final bill", price*user_order.qty+0.18*(price*user_order.qty))
                                        console.log(user_order)
                                    }else{
                                        console.log("If not okay with the order, then kindly order again as per your convenience")
                                    }
                                    
                                })

                        })
                }
            })
    })
    .catch((error) => {
        if (error.isTtyError) {

        } else {

        }
    });

