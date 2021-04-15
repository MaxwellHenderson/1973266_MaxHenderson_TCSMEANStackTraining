let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = 9090;

let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

app.get("/display", (req, res) => {
  console.log(req.url);
  let records = getRecords();
  console.log("Records in get\n" + records);
  records.then((result) => console.log(result));
  res.send(records);
});

async function getRecords() {
  let records = "";

  mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
    if (!err1) {
      let db = client.db("meanstack");
      let cursor = db.collection("Product").find();
      console.log(cursor);
      cursor.forEach((doc) => {
        if (doc != null) {
          records =
            records +
            "id is " +
            doc._id +
            "\nProduct Name is " +
            doc.name +
            "\nPrice is " +
            doc.price +
            "\n";
        }
        console.log("Records" + records);
        client.close();
        return records;
      });
      //   return cursor;
    } else {
      console.log("Error" + err1);
    }
  });
}

app.listen(port, () => console.log(`Server listening on port nubmer ${port}`));
