var http = require("http");
var url = require("url");
let fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var dates = q.year;

    res.end(dates + "<br>" + q.month);
  })
  .listen(8080);
