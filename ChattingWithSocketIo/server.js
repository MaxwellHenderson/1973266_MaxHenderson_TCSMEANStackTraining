let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let ChatModel = require("./chat.model");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("Client connected to application......");

  socket.on("chat", (msg) => {
    let timestamp = Date.now();
    let newChat = new ChatModel({
      _id: timestamp,
      uName: msg.uName,
      msg: msg.msg,
    });
    newChat.save((err, result) => {
      if (!err) {
        console.log("Message stored successfully");
      } else {
        console.log("Message storage failed");
        console.log(err);
      }
    });
  });
});

http.listen(9090, () => console.log("server running on port number 9090"));
