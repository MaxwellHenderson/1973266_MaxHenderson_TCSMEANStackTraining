let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (!err) {
    let db = client.db("meanstack");
    db.collection("Product").updateOne(
      { _id: 101 },
      { $set: { price: 5239592 } },
      (err, result) => {
        if (!err) {
          console.log(result.result);
        } else {
          console.log("error: " + err);
        }
        client.close();
      }
    );
  } else {
    console.log("Error: " + err);
  }
});
