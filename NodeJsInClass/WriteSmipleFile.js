let fs = require("fs");

var msg = "This is ";

fs.writeFileSync("info.txt", msg, { flag: "a" });

console.log("File stored");
console.log("done...");
