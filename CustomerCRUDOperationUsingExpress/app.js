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

app.get("/", (req, res) => {
  res.json(customers);
});

app.get("/allCustomers", (req, res) => {
  res.json(customers);
});

app.post("/storeCustomer", (req, res) => {
  console.log(req.body);
  customers.push(req.body);
  res.send("post method called...");
});

app.put("/updateAge", (req, res) => {
  console.log("Updating age...");
  let cid = req.body.custId;
  let cage = req.body.age;
  let flag = 0;
  customers.find((c) => {
    if (c.custId == cid) {
      c.age = cage;
      flag++;
    } else {
    }
  });
  if (flag == 0) {
    res.send("Cust Id is unavailable");
  } else {
    res.send("Age updtaed succcesfully");
  }
});

app.delete("/deleteCustomer/:cid", (req, res) => {
  console.log("Deleting");
  let id = req.params.cid;
  let flag = 0;

  let j;
  customers.find((c, i) => {
    if (c.custId == id) {
      j = i;
      flag++;
    }
  });
  if (flag == 0) {
    res.send("Cust ID is invalid");
  } else {
    customers.splice(j, 1);
    res.send("User deleted");
  }
});

//Start server
app.listen(port, () => console.log(`Server running on port number ${port}`));
