#! /usr/bin/env node
import inquirer from "inquirer";
const randomNuber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessNumber",
        type: "number",
        message: "Enter your guess number (num limit from 1 to 5) :  "
    },
]);
if (answer.guessNumber === randomNuber) {
    console.log("Congratulation ! You Guess a Correct Number");
}
else {
    console.log("You Guess a Wrong Nmuber ");
}
