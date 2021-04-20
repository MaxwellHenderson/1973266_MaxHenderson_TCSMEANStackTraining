let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let PostSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("post", PostSchema);
