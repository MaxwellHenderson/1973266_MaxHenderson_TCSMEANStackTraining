var http = require("http");
var url = require("url");
let fs = require("fs");
const PORT = process.env.PORT || 5000;

http
  .createServer(function (req, res) {
    var query = url.parse(req.url, true);

    var filename = "." + query.pathname;

    if (filename == "./") filename = "./index";

    filename = filename + ".html";
    console.log(filename);
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(PORT);

console.log("Server Listening on port 8080...");
