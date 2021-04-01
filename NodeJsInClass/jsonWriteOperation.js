let fs = require("fs");

var empObj = '{"id": 100, "name": "Bill", "salary":12000}';
var empJson = JSON.parse(empObj);
var empString = JSON.stringify(empJson);

fs.writeFile("emp.json", empObj, (err) => {
  if (!err) {
    console.log("Record storeed successfully");
  }
});
