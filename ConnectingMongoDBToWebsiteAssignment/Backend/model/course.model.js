let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let url = "mongodb://localHost:27017/Courses";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

let CourseSchema = mongoose.Schema({
  _id: Number,
  cName: String,
  cDesc: String,
  cAmount: Number,
});

let CourseModel = mongoose.model("", CourseSchema, "Course");

module.exports = CourseModel;
