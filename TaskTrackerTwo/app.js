let http = require("http");
let url = require("url");
let DataDriver = require("./dataDriver");
let HTMLBuilder = require("./htmlBuilder");
let htmlBuilder = new HTMLBuilder();
let dataDriver = new DataDriver();

htmlBuilder.buildPage(dataDriver.getTasks());

let server = http.createServer((req, res) => {
  let pathInfo = url.parse(req.url, true).pathname;
  console.log("Path: " + pathInfo);
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  //Default landing page, just displays stored html
  if (pathInfo == "/") {
    console.log("Base page");
    res.end(htmlBuilder.getHTMLString());
  }

  //When form is successfully submitted. Has DataDriver update the data
  //And re-renders the html
  else if (pathInfo == "/addTask") {
    console.log("adding a task");
    let data = url.parse(req.url, true).query;
    //Add the new task to the taskMap
    if (
      !dataDriver.addTask(data.empId, data.taskId, data.taskDesc, data.deadline)
    )
      htmlBuilder.setError(
        `Sorry, that task ID already exists. Please enter a unique task ID.`
      );
    else htmlBuilder.setError(``);
    //Rebuild the html string with the newly updated tasks
    htmlBuilder.buildPage(dataDriver.getTasks());
    res.end(htmlBuilder.getHTMLString());
  }

  //When the "Delete Task" button is pressed. Has DataDriver delete the task
  //and re-renders the html
  else if (pathInfo == "/deleteTask") {
    console.log("delete");

    let data = url.parse(req.url, true).query;
    console.log(data);
    console.log(data.taskId);
    dataDriver.deleteTask(data.taskId);
    htmlBuilder.buildPage(dataDriver.getTasks());
    res.end(htmlBuilder.getHTMLString());
  }
});

server.listen(9999, () => console.log("Server running on port 9999"));
