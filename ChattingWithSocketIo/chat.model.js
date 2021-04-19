let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let url = "mongodb://localHost:27017/Chats";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

let ChatSchema = mongoose.Schema({
  _id: Number,
  uName: String,
  msg: String,
});

let ChatModel = mongoose.model("", ChatSchema, "Chat");

module.exports = ChatModel;
