let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (!err) {
    let db = client.db("meanstack");
    db.collection("Product").deleteOne({ _id: 105 }, (err, result) => {
      if (!err) {
        if (result.deletedCount > 0) {
          console.log("Record deleted succesfully");
        } else {
          console.log("record not present");
        }
      }
      client.close();
    });
  }
});
