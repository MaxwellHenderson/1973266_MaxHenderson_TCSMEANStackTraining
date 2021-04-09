let app = require("express")();
let bodyParser = require("body-parser");
let port = 9090;

//Middleware modules
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let customers = [
  { custId: 100, cname: "Ravi", age: 21 },
  { custId: 200, cname: "Rajesh", age: 23 },
  { custId: 300, cname: "Ramesh", age: 25 },
];

app.get("/allCustomers", (req, res) => {
  res.json(customers);
});

//Start server
app.listen(port, () => console.log(`Server running on port number ${port}`));
