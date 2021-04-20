const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
let mongoose = require("mongoose");

const errorHandler = require("./middleware/errorHandler");
const postRoutes = require("./routes/post");
const { Mongoose } = require("mongoose");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localHost:27017/rest-api-node", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/post", postRoutes);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Listening...");
});
