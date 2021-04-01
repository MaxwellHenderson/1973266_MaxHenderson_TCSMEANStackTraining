let fs = require("fs");

//When it reads the file, it reads it as a buffer object
fs.readFile("emp.json", (err, data) => {
  if (!err) {
    console.log("Type is " + typeof data);
    let empString = data.toString();
    let empJson = JSON.parse(empString);
    console.log("id is " + empJson.id);
    console.log("name is " + empJson.name);
    console.log("salary is " + empJson.salary);
  } else console.log(err);
});

console.log("Doing other tasks now");
