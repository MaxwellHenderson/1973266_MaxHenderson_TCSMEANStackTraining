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
  Product.updateMany(
    { _id: 101 },
    { $set: { price: 23235 } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          console.log("Record updated");
        } else {
          console.log("Record not present");
        }
        obj.disconnect();
      }
    }
  );
});
