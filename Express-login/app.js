let app = require("express")();
let bodyParser = require("body-parser");
let path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));
let port = 9090;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/checkLogin", (req, res) => {
  let user = req.body.user;
  let pass = req.body.pass;
  res.send("Post method called... " + user);
});

app.listen(port, () => console.log(`Server running on port number ${port}`));
