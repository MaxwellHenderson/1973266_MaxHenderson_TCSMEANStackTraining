let app = require("express")();
let bodyParser = require("body-parser");
let port = 9090;

//Middleware modules
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Controllers
let courseController = require("./Backend/controller/course.controller");

let frontEnd = __dirname + "/Frontend/pages";

app.get("/", (req, res) => {
  res.sendFile(frontEnd + "/main.html");
});

//Adding courses routes
app.get("/addCourse", (req, res) => {
  res.sendFile(frontEnd + req.url + ".html");
});
app.get("/addCourse/post", (req, res) => {
  courseController.addCourse(req.query, (result) => {
    if (result) {
      console.log("Success");
      res.sendFile(frontEnd + "/addCourse.html");
    } else {
      res.send(
        "Sorry, that ID is already in use. Please use the back button to return and use a unique id"
      );
    }
  });
});

//Updating Courses routes
app.get("/updateCourse", (req, res) => {
  res.sendFile(frontEnd + req.url + ".html");
});
app.get("/updateCourse/post", (req, res) => {
  console.log(req.url);
  console.log(req.query);
  console.log(req.query.courseId);
  courseController.updateCourse({
    id: req.query.courseId,
    amount: req.query.courseAmount,
  });
  res.sendFile(frontEnd + "/updateCourse.html");
});

//Delete course routes
app.get("/deleteCourse", (req, res) => {
  res.sendFile(frontEnd + req.url + ".html");
});
app.get("/deleteCourse/post", (req, res) => {
  courseController.deleteCourse(req);
  res.sendFile(frontEnd + "/deleteCourse.html");
});

//List courses route
app.get("/listCourses", (req, res) => {
  courseController.getCourses(res);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
