let http = require("http");
let fs = require("fs");
let DataDriver = require("./dataDriver");
let hb = require("./htmlBuilder");
let htmlBuilder = new hb.HTMLBuilder();

let server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.end(htmlBuilder.getHTMLString());
});

server.listen(9999, () => console.log("Server running on port 9999"));
