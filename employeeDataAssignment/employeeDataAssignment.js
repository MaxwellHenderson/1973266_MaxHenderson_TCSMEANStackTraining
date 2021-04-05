class EmployeeDatabase {
  input = require("readline-sync");
  fs = require("fs");
  filename = "employeeData.json";

  //Runs a console menu for the user
  run() {
    let menuOptions = ["View Employees", "Add new employees"];
    let running = true;

    while (running) {
      console.clear();
      console.log(
        "**********************************\n|                                |\n| Welcome to employee management |\n|                                |\n**********************************\n"
      );
      let menuChoice = this.input.keyInSelect(
        menuOptions,
        "What would you like to do?",
        { cancel: "Quit" }
      );
      switch (menuChoice) {
        case 0:
          this.viewEmployees();
          break;
        case 1:
          this.addNewEmployees();
          break;
        case -1:
          running = false;
        default:
          break;
      }
    }
  }

  //Adds new employee entries to employeeData.json
  addNewEmployees() {
    if (!this.checkDB()) return;

    let numRecords = this.input.questionInt(
      "How many records would you like to store?\n"
    );

    //Used to store the newly added data
    let employeeData = new Array();

    //For the number of records the user wants to add, get info and push into
    //the created array
    for (let i = 0; i < numRecords; i++) {
      debugger;
      console.log("\n");
      let id = this.input.questionInt("What is the id: ");
      let name = this.input.question("What is the name: ");
      let salary = this.input.questionInt("What is the salary: ");
      let timestamp = new Date(+new Date()).toString();
      let emp = { id: id, name: name, salary: salary, timestamp: timestamp };

      employeeData.push(emp);
    }
    let storedData = this.fs.readFileSync("employeeData.json").toString();
    let storedArray = JSON.parse(storedData);
    storedArray = storedArray.concat(employeeData);
    this.fs.writeFileSync(this.filename, JSON.stringify(storedArray));
    console.log("File is saved: \n");

    this.viewEmployees();
  }

  //Prints the current database to the console
  viewEmployees() {
    console.clear();
    if (!this.checkDB()) return;
    console.log(
      "**********************\nCurrent employee data\n*********************\n\n"
    );
    let data = this.fs.readFileSync("employeeData.json");
    let dataJSON = JSON.parse(data.toString());
    console.log(dataJSON);
    this.input.keyIn("Press any key to go back");
  }

  //Creates a new employeeData.json file with the inital array;
  createDB() {
    let intialDB = "[]";
    this.fs.writeFileSync(this.filename, intialDB);
  }

  //Checks on existence and validity of the employee.json file.
  //If it doesn't exist, creates the file.
  //If the format of the file is incorrect, asks user if they would like to remake the file
  checkDB() {
    if (!this.isDBExists()) this.createDB();
    if (!this.isDBValid()) {
      this.corruptDB();
      return false;
    }
    return true;
  }

  //This is called when the format of the employeeData.json file is not
  //correct. This will delete and remake the file
  corruptDB() {
    let choice = this.input.keyInYNStrict(
      "The database is corrupt. Would you like to delete it and start fresh?"
    );
    if (!choice) return;

    choice = this.input.keyInYNStrict("Are you sure?");
    if (!choice) return;

    this.deleteDB();
    this.createDB();
  }

  //Deletes the employee.json file
  deleteDB() {
    this.fs.unlinkSync(this.filename);
  }

  //Returns whether the employee.json file exists in the current directory
  isDBExists() {
    return this.fs.existsSync(this.filename);
  }

  //Ensures the employee.json file is not empty and that it is made of an array
  //by checking if the first and last characters of the file are opening and closing
  //square brackets
  isDBValid() {
    let fileString = this.fs.readFileSync(this.filename).toString();
    debugger;
    if (fileString.length == 0) return false;
    if (
      fileString.charAt(0) != "[" ||
      fileString.charAt(fileString.length - 1) != "]"
    )
      return false;
    return true;
  }
}

exports.EmployeeDatabase = EmployeeDatabase;
