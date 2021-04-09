//HTMLBuilder is used to build the HTML string to send to the browser.
//Functions are written for each "component" of the app

class HTMLBuilder {
  html = `<!DOCTYPE html>`;
  //This is used to send error messages to the user. It is just a piece of text in the HTML of the body
  errorMessage = ``;

  constructor() {
    this.buildPage(new Map());
  }

  //Returns the HTMLString
  getHTMLString() {
    return this.html;
  }

  setError(err) {
    this.errorMessage = err;
  }

  //Takes a Map of the tasks, used by the buildTaskTable function
  buildPage(taskList) {
    this.html = this.buildHeader();
    this.html = this.html + this.buildBody(taskList) + `</html>`;
  }

  //Builds the HTML head
  buildHeader() {
    let htmlString = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>Task Tracker</title>
</head>`;
    return htmlString;
  }

  //Takes the different "component" functions, and adds them together
  buildBody(taskList) {
    let body = `<div class="container-sm">`;
    body =
      body +
      `<br>` +
      this.buildTaskForm() +
      `<br>` +
      this.buildDeleteTaskForm() +
      `<br>` +
      this.buildTaskTable(taskList) +
      `</div>`;

    return body;
  }

  //Builds the form to add tasks
  buildTaskForm() {
    let htmlString = `<form action="addTask" method="get">
      <div class="row">
        <div class="col">
          <div class="form-group">
            User ID <input type="number" class="form-control" name="empId" required/> <br>
          </div>
          <div class="form-group">
            Task ID <input type="number" class="form-control" name="taskId" required/> <br>
          </div>
          <div class="form-group">
            Task Description<br><textarea class="form-control" name="taskDesc" required minlength="3"></textarea> <br>
          </div>
          <div class="form-group">
            Deadline <input type="date" class="form-control" name="deadline" required/> <br>
          </div>
          <input type="submit" class="form-control" value="Add Task"> <br>
          ${this.errorMessage}
          <br>
        </div>
        <div class="col">
        </div>
      </div>

    </form>`;

    return htmlString;
  }

  buildDeleteTaskForm() {
    let htmlString = `<form action="deleteTask" method="get">

      <div class="row">
          <div class="col">
            <div class="form-group">
              Enter task ID to delete input: <input type="number" name="taskId" class="form-control"/> <input type="submit" value="Delete Task" class="form-control">
            </div>
          </div>
          <div class="col">
          </div>
        </div>
    </form>`;

    return htmlString;
  }

  //Takes info and builds an html table row
  buildTaskRow(empId, taskId, taskDesc, deadline) {
    return `    <tr>
        <td>${empId}</td>
        <td>${taskId}</td>
        <td>${taskDesc}</td>
        <td>${deadline}</td>
    </tr>`;
  }

  //Turns the tasks into an array, then iterates through calling buildTaskRow() for each
  //task to add to the table.
  buildTaskTable(taskList) {
    let rows = new Array();
    for (let task of taskList.values()) {
      rows.push(
        this.buildTaskRow(task.empId, task.taskId, task.taskDesc, task.deadline)
      );
    }

    let table = `<table class="table">
    <tr>
        <th>User ID</th>
        <th>Task ID</th>
        <th>Task Description</th>
        <th>Deadline</th>
    `;
    rows.forEach((row) => {
      table = table + row;
    });
    table = table + `</table>`;

    return table;
  }
}

module.exports = HTMLBuilder;
