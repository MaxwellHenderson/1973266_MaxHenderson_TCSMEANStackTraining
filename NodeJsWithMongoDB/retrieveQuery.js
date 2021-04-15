let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
  if (!err1) {
    let db = client.db("meanstack");
    let cursor = db.collection("Product").find({ price: { $gt: 6000 } });
    // console.log(cursor.read());
    // client.close();
    cursor.forEach((doc) => {
      // console.log(doc);
      if (doc != null)
        console.log(
          "id is " +
            doc._id +
            "\nProduct Name is " +
            doc.name +
            "\nPrice is " +
            doc.price +
            "\n"
        );

      client.close();
    });
  } else {
    console.log("Error" + err1);
  }
});
