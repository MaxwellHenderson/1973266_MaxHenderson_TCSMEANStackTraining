var http = require("http");
let fs = require("fs");

var htmlText = fs.readFileSync("index.html");
console.log(htmlText.toString());
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlText.toString());
  })
  .listen(8080);
