var http = require("http");
var url = require("url");
let fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      console.log("...Incoming Request: " + req.url);
      res.end();
    });
  })
  .listen(8080);

console.log("Server Listening on port 8080...");
