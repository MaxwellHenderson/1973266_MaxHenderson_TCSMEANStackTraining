let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let ChatModel = require("chat.model.js");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("Client connected to application......");

  socket.on("chat", (msg) => {
    console.log(msg);
  });
});

http.listen(9090, () => console.log("server running on port number 9090"));
