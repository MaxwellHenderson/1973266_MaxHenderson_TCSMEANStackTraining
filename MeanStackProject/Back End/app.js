//Load required modules
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

//Database URL details
let url = "mongodb://localhost:27017/meanstack";

//Middleware enable data from post method. Reading the data coming in
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database connection without warning
const mongooseDbOption = {
  //To avoid warnings
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect(url, mongooseDbOption); //Ready to connect

//Connect the data
mongoose.connection;

var Product = require("./router/product.router.js");

//Middleware
app.use("/product", Product);
app.listen(9090, () => console.log("Server listening..."));
