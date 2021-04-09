let http = require("http");
let fs = require("fs");
let DataDriver = require("./dataDriver");
let HTMLBuilder = require("./htmlBuilder");
let htmlBuilder = new HTMLBuilder();
let dataDriver = new DataDriver();

console.log(dataDriver.getTasks())

console.log("Build the table \n")
let table = htmlBuilder.buildTaskTable(dataDriver.getTasks())
console.log(table)



// let server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.writeHead(200, {
//     "Content-Type": "text/html",
//   });
//   res.end(htmlBuilder.getHTMLString());
// });

// server.listen(9999, () => console.log("Server running on port 9999"));
