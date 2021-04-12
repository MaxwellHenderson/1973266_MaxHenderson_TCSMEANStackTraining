var app = require("express")();
var ws = require("express-ws")(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.ws("/", (socket, res) => {
  socket.send("Message from server....");
});

app.listen(9090, () => console.log("WebSocket server running on port 9090"));
