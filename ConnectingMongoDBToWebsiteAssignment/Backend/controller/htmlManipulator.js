let cheerio = require("cheerio");
let fs = require("fs");

let updateCourseList = (courses) => {
  fs.readFileSync(
    "ConnectingMongoDBToWebsiteAssignmentFrontendpageslistCourses.html",
    "utf8",
    (err, data) => {
      if (err) throw err;
      var $ = cheerio.load(data);
      courses.forEach((course) => {
        let row = `<tr>
                        <td>${course._id}</td>
                        <td>${cName}</td>
                        <td>${cDesc}</td>
                        <td>${cAmount}</td>
                    </tr>`;
        $(row).insertAfter(".thead");
        $.html();
      });
    }
  );
};
