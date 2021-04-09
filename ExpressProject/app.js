let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = 9090;

app.get("/", (req, res) => {
  res.send("Welcome to Express module - Get");
});
app.get("/aboutus", (req, res) => {
  res.send("Welcome to About Us Page");
});
app.get("/contactus", (req, res) => {
  res.send("Welcome to Contact Us Page");
});
app.get("/login", (req, res) => {
  res.send("Welcome to login Page");
});
app.get("/singleQuery", (req, res) => {
  let name = req.query.name;
  res.send("Welcome user " + name);
});
app.get("/multiple", (req, res) => {
  let id = req.query.id;
  let name = req.query.name;
  let salary = req.query.salary;
  salary = eval(salary) + 5000;
  res.send(
    `Hello employee number ${id}, name ${name}. Your new salary is ${salary}`
  );
});

// http://localhost:9090/storeData      Post method
app.post("/", (req, res) => {
  res.send("Welcome to Express module - Post");
});

// http://localhost:9090/storeData
app.post("/storeData", (req, res) => {
  let name = req.body.name;
  res.send("welcome to Node JS post method " + name);
});

app.listen(port, () => console.log(`Server listening on port nubmer ${port}`));
