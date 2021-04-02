let input = require("readline-sync");
let fs = require("fs");

let jsonString = ""

let numRecords = input.questionInt("How many records would you like to store?")
console.log(numRecords)

let employeeData = new Array()
for(let i = 0; i < numRecords; i++){
    console.log("\n\n")
    let id = input.question("What is the id: ");
    let name = input.question("What is the name: ")
    let salary = input.question("What is the salary: ")
    let emp = {"id":id, "name":name,"salary":salary}
    employeeData.push(emp)    
}

let storedData = fs.readFileSync("employeeData.json").toString();
console.log("Stored data " + storedData);
let storedArray = JSON.parse(storedData)
console.log("Stored array ")
console.log(storedArray)
storedArray = storedArray.concat(employeeData);

console.log("New stored array ")
console.log(storedArray)

fs.writeFileSync("employeeData.json", JSON.stringify(storedArray) )
console.log("File is saved: \n")


let data = fs.readFileSync("employeeData.json");
let dataJSON = JSON.parse(data.toString())
console.log("Data type: "+typeof(dataJSON)+"\n")
console.log(dataJSON)