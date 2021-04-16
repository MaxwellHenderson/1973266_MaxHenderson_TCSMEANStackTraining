const { ResumeToken } = require("mongodb");
let CourseModel = require("../model/course.model.js");
let htmlManipulator = require("./htmlManipulator.js");

let addCourse = (req, res) => {
  let newCourse = new CourseModel(req);
  newCourse.save((err, result) => {
    if (!err) {
      res(true);
    } else {
      res(false);
    }
  });
};

let updateCourse = (req, res) => {
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

let getCourses = async (res) => {
  let courses;
  await CourseModel.find({}, (err, result) => {
    if (!err) {
      courses = result;
    }
  });
  htmlManipulator.updateCourseList(courses, res);
};

let deleteCourse = (req, res) => {
  console.log(req.query);
  CourseModel.deleteOne({ _id: req.query.courseId }, (err, result) => {
    if (!err) {
      console.log("Succesful delete");
    } else {
      console.log("Error deleting" + err);
    }
  });
};

module.exports = { addCourse, updateCourse, getCourses, deleteCourse };
