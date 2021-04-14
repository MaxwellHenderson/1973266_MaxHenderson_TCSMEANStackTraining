let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  console.log(client);
  //   let db = client.db("meanstack");
  if (!err) {
    console.log("connected succesfully");
  } else {
    console.log("Error " + err);
  }
  client.close();
});
