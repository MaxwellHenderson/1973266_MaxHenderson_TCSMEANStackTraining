let fs = require("fs");
let callsJSON = JSON.parse(fs.readFileSync("call_data.json"));

let obj = require("mongoose");
obj.Promise = global.Promise;
let uri = "mongodb://localhost:27017/callAnalysis";
obj.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
let db = obj.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => {
  //Define the schema
  let CallsSchema = obj.Schema({
    _id: Number,
    source: Number,
    destination: Number,
    sourceLocation: String,
    destinationLocation: String,
    callDuration: String,
    roaming: String,
    callCharge: Number,
  });
  //Creating the model using schema
  let Call = obj.model("Call", CallsSchema);

  callsJSON.forEach((call) => {
    console.log(typeof call);
    let callObj = new Call(call);
    callObj.save((err, result) => {
      if (!err) {
        console.log("Call inserted successfully");
        console.log(result);
      } else {
        console.log(err);
      }
      obj.disconnect();
    });
  });
});
