let obj = require("mongoose");
obj.Promise = global.Promise;
let uri = "mongodb://localhost:27017/meanstack";
obj.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
let db = obj.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => {
  //Define the schema
  let ProductsSchema = obj.Schema({
    _id: Number,
    pname: String,
    price: Number,
  });
  //Creating the model using schema
  let Product = obj.model("Product", ProductsSchema);

  //Creating reference using model
  let p1 = new Product({ _id: 100, pname: "TV", price: 55000 });
  p1.save((err, result) => {
    if (!err) {
      console.log("record inserted successfully\n" + result);
    } else {
      console.log(err);
    }
    obj.disconnect(); //close the connection
  });
});
