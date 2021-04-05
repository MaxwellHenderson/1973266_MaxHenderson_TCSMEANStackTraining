let fs = require("fs");
let input = require("readline-sync");
let sStore = require("./consoleInputStoreJson");

let empDB = new sStore.EmployeeDatabase();

empDB.run();

// menuOptions = ["View Employees", "Add new employees"];
// running = true;

// console.log("Welcome to employee management\n******************************\n");
// menuChoice = input.keyInSelect(menuOptions, "What would you like to do?", {
//   cancel: "quit",
// });
// console.log(menuChoice);
