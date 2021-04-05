let http = require("http");
let server = http.createServer((request, response) => {
  console.log(request.url);
  response.end("Welcome to simple client server app");
});

server.listen(9999, () => console.log("server is running on port number 9999"));
