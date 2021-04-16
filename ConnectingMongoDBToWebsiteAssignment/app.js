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
  console.log(req.url);
  res.append("Courses", '{name:"Max",salary:23451235}');
  res.sendFile(frontEnd + "/main.html");
});

//Adding courses routes
app.get("/addCourse", (req, res) => {
  console.log(req.url);
  res.sendFile(frontEnd + req.url + ".html");
});
app.get("/addCourse/post", (req, res) => {
  console.log(req.url);
  console.log(req.query);
  courseController.addCourse(req.query);
  res.sendFile(frontEnd + "/addCourse.html");
});

//Updating Courses routes
app.get("/updateCourse", (req, res) => {
  console.log(req.url);
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

app.get("/deleteCourse", (req, res) => {
  console.log(req.url);
  res.sendFile(frontEnd + req.url + ".html");
});

app.get("/listCourses", (req, res) => {
  console.log(req.url);

  courseController.getCourses().then((courses) => {
    console.log(courses);
    res.sendFile(frontEnd + req.url + ".html");
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
