let fs = require("fs");

var msg = "This is an async message store through FS module";

fs.writeFile("info1.txt", msg, { flag: "a" }, (error) => {
  if (!error) console.log("Data successfully stored");
});

console.log("done");
console.log("done");
