#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let whileCondition = true;
while (whileCondition === true) {
    let condition = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: "select your options",
            choices: ["addTodo", "removeTodo", "exit"],
        },
    ]);
    if (condition.option === "addTodo") {
        let user = await inquirer.prompt([
            {
                name: "addTodo",
                type: "input",
                message: "What would you like to add in your to-do list?",
            },
        ]);
        if (user.addTodo !== "") {
            todoList.push(user.addTodo);
            console.log(todoList);
        }
        else {
            console.log("provide a valid input.");
        }
    }
    else if (condition.option === "removeTodo") {
        if (todoList.length === 0) {
            console.log("ypur todoList is empty.");
        }
        else {
            let remove = await inquirer.prompt([
                {
                    name: "removeItems",
                    type: "list",
                    choices: todoList,
                    message: "Would you like to remove todo in your todo list.",
                },
            ]);
            let Removetode = todoList.indexOf(remove.removeItems);
            if (Removetode >= 0) {
                todoList.splice(Removetode, 1);
                console.log("you remove:", remove.removeItems);
                console.log(todoList);
            }
            else {
                console.log("Item not found in the todoList");
            }
        }
    }
    else if (condition.option === "exit") {
        whileCondition = false;
    }
}
console.log(`Thanks for using to-do-List!`);
