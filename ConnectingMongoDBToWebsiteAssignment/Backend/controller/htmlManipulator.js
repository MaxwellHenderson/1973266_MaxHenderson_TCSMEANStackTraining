let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");

//This takes the array from MongoDB and uses cheerio to build the html string, dynamically building the table
let updateCourseList = async (courses, res) => {
  fs.readFile(
    path.resolve("Frontend/pages", "listCourses.html"),
    // "ConnectingMongoDBToWebsiteAssignment/Frontend/pages/listCourses.html",
    "utf8",
    (err, data) => {
      if (err) throw err;
      var $ = cheerio.load(data);
      courses.forEach((course) => {
        let row = `<tr>
                        <td>${course._id}</td>
                        <td>${course.cName}</td>
                        <td>${course.cDesc}</td>
                        <td>${course.cAmount}</td>
                    </tr>`;
        $(row).insertAfter(".thead");
      });
      res.send($.html());
    }
  );
};

module.exports = { updateCourseList };
