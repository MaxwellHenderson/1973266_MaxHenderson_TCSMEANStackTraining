let CourseModel = require("../model/course.model.js");

let addCourse = (req, res) => {
  console.log("Adding course");
  console.log(req);

  let newCourse = new CourseModel(req);
  console.log(newCourse);
  newCourse.save((err, result) => {
    if (!err) {
      //   res.result = result;
      console.log("Course added successfully");
      console.log(result);
    } else {
      console.log(err);
    }
  });
};

let updateCourse = (req, res) => {
  console.log(req);
  CourseModel.updateOne(
    { _id: req.id },
    { $set: { cAmount: req.amount } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          console.log("Course updated");
        } else {
          console.log("Course not found");
        }
      }
    }
  );
};

let getCourses = async () => {
  console.log("Getting courses");
  let courses;
  await CourseModel.find({}, (err, result) => {
    if (!err) {
      //   console.log(result);
      courses = result;
    }
  });
  return courses;
};

module.exports = { addCourse, updateCourse, getCourses };
