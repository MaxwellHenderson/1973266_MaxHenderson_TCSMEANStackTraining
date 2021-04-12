let net = require("net");
let server = net.createServer();

let sockets = [];

server.on("connection", (socket) => {
  console.log("new client connected...");
  sockets.push(socket);
  socket.on("data", (msg) => {
    console.log("DATA" + socket.remoteAddress + ": " + msg);

    sockets.forEach((socket, index, array) => {
      socket.write("Borgor");
    });
  });
});

server.listen(9090, () => console.log("Server is running on port 9090..."));
