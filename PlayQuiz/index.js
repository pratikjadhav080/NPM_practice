console.log("***********************************")
console.log("Welcome to the Quiz")
console.log("Please login to continue")
console.log("***********************************")

var inquirer = require('inquirer');

var count=0;



function round1(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "Who is the vice president of India?",
            name: "question1",
            choices: [
                "Mohammad Hamid Ansari",
                "Krishan Kant",
                "Venkaiah Naidu",
                "Ram Nath Kovind"
            ]
        },
        {
            type: "list",
            message: "What is bull market?",
            name: "question2",
            choices: [
                "condition of a financial market in which prices are declining",
                "condition of a financial market in which prices are rising",
                "None"
            ]
        },
        {
            type: "list",
            message: "First Indian to win an olympic medal after independence?",
            name: "question3",
            choices: [
                "Neeraj Chopra",
                "Abhinav Bindra",
                "Khashaba Jadhav",
                "PV Sindhu"
            ]
        },
    ])
    .then((ans)=>{
        if(ans.question1 == 'Venkaiah Naidu'){
            count++
        }
        if(ans.question2 == 'condition of a financial market in which prices are rising'){
            count++
        }
        if(ans.question3 == 'Khashaba Jadhav'){
            count++
        }

        console.log("Loading....")

        setTimeout(function(){
            console.log("Round 1 is over, your score till now is :",count)
            console.log("Be ready for the next round")
        },2000)



        setTimeout(round2,3000)
    })
}


function round2(){

        console.log("------------------------------------------------------------------")
        console.log("Round 2")
        console.log("------------------------------------------------------------------")

    inquirer
    .prompt([
        {
            type: "list",
            message: "What is the top color in a rainbow?",
            name: "question1",
            choices: [
                "Violet",
                "Red",
                "Green",
                "Blue"
            ]
        },
        {
            type: "list",
            message: "In which direction does the sunrise?",
            name: "question2",
            choices: [
                "west",
                "south",
                "North",
                "east"
            ]
        },
        {
            type: "list",
            message: "How many weeks are there in one year?",
            name: "question3",
            choices: [
                "53",
                "52",
                "51",
                "None"
            ]
        },
    ])
    .then((ans)=>{
        if(ans.question1 == 'Red'){
            count++
        }
        if(ans.question2 == 'east'){
            count++
        }
        if(ans.question3 == '52'){
            count++
        }

        console.log("Loading....")

        setTimeout(function(){
            console.log("Round 2 is over, your score till now is :",count)
            console.log("Be ready for the next round")
        },2000)

        setTimeout(round3,3000)
    })
}

function round3(){

    console.log("------------------------------------------------------------------")
    console.log("Round 3")
    console.log("------------------------------------------------------------------")

    inquirer
    .prompt([
        {
            type: "list",
            message: "Which place is known as the roof of the world?",
            name: "question1",
            choices: [
                "Mount Everest",
                "China",
                "Tibetan Plateau",
                "Sky"
            ]
        },
        {
            type: "list",
            message: "Which gas is most abundant in the earth’s atmosphere?",
            name: "question2",
            choices: [
                "Oxygen",
                "Nitrogen",
                "Helium",
                "Argon"
            ]
        },
        {
            type: "list",
            message: "Who discovered electricity?",
            name: "question3",
            choices: [
                "Benjamin Franklin",
                "Alexander Fleming",
                "Alexander Graham Bell",
                "Humphry Davy"
            ]
        },
    ])
    .then((ans)=>{
        if(ans.question1 == 'Tibetan Plateau'){
            count++
        }
        if(ans.question2 == 'Nitrogen'){
            count++
        }
        if(ans.question3 == 'Benjamin Franklin'){
            count++
        }



        console.log("Loading....")

        setTimeout(function(){
            console.log("Round 3 is over, your score is :",count)

            if(count>=5 && count<9){
                console.log("Congratulations You won a bronze badge !")
            }else if(count<5){
                console.log("Unfortunately, you were not able to answer correct for most of the questions, please try again !")
            }else{
                console.log("Congratulations You just answered all the questions correctly !!!")
                console.log("Please Be ready for the final question")
                setTimeout(round4,3000)
            }
            
        },2000)

        
    })
}

function round4(){

    console.log("------------------------------------------------------------------")
    console.log("Final Round")
    console.log("------------------------------------------------------------------")

    inquirer
    .prompt([
        {
            type: "list",
            message: "Which African nation is famous for chocolate?",
            name: "question",
            choices: [
                "Nigeria",
                "Ghana",
                "Morocco",
                "Tanzania"
            ]
        }])
        .then((ans)=>{

            setTimeout(function(){
                if(ans.question == 'Gh
                ana'){
                    console.log("congratulations, your answer is correct and You just won a Golden badge !!!!!!")
                }else{
                    console.log("Nice try buddy, However unfortunately your answer was incorrect, but still You have won a Silver badge !!!!!!")
                } 
            },2000)
        })
}

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
        console.log("Welcome to the Quiz : ",userdetails.username)

        console.log("------------------------------------------------------------------")

        console.log("There are 3 rounds in the Quiz, each round will have 3 questions and for every correct question you will get one mark. At last, if your score is 9(All answers correct), you will get a final question on answering which you will win a golden badge. If you are not able to answer the last question you will be awarded with a silver badge. If you are unable to reach till the final question, however if your score is more than or equal to 5, you will get a bronze badge, If you are not able to solve atleast 5 questions, you will get nothing.")
        
        console.log("------------------------------------------------------------------")

        inquirer
        .prompt([
            {
                type: "confirm",
                message: "Kindly read above rules, and let us know if you are ready for the quiz?",
                name: "ready"
            }
        ])
        .then((ans)=>{
            if(ans.ready){

                setTimeout(function(){
                    console.log("Your quiz starts now")
                    console.log("------------------------------------------------------------------")
                    console.log("Round 1")
                    console.log("------------------------------------------------------------------")
                },2000)

                setTimeout(round1,3000)
               
            }else{
                inquirer
                    .prompt([
                        {
                            type: "confirm",
                            message: "Kindly confirm once again whether you wish to play or not?",
                            name: "playornot"
                        }
                    ])
                    .then((ans)=>{
                        if(ans.playornot){
                            setTimeout(function(){
                                console.log("Your quiz starts now")
                                console.log("------------------------------------------------------------------")
                                console.log("Round 1")
                                console.log("------------------------------------------------------------------")
                            },2000)

                            setTimeout(round1,3000)
                        }else{
                            console.log("Okay, lets end the quiz!!")
                        }
                    })
            }
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
