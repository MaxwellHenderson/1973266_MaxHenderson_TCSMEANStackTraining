let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

//Post is used for delete and update because plain html can only do get and post
app.post("/storeCDetails", (req, res) => {
  /*
    retrieve data from body part
    connect to database
    store in database

    res.sendFile(__dirname+"index.html") or whatever page is next
    */
});

app.listen(9090, () => console.log("Server listening"));
