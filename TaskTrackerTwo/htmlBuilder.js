let parser = require("jsdom");
let { JSDOM } = parser;

class HTMLBuilder {
  html = `<!DOCTYPE html><p>Hello world</p>`;

  constructor() {}

  getHTMLString() {
    this.html;
  }

  buildPage() {
    html = ``;
  }

  buildTaskRow(userId, taskId, taskDesc, deadline) {
    return `    <tr>
        <td>${userId}</td>
        <td>${taskId}</td>
        <td>${taskDesc}</td>
        <td>${deadline}</td>
    </tr>`;
  }

  buildTaskTable(taskList) {
    let rows = new Array()
    for(let task of taskList.values()){
      debugger;
      rows.push(this.buildTaskRow(task.userId,task.taskId,task.taskDesc,task.deadline))
    }

    let table = `<table>
    <tr>
        <th>User ID</th>
        <th>Task ID</th>
        <th>Task Description</th>
        <th>Deadline</th>
    `
    rows.forEach(row =>{
      table = table + row
    })


    return table;
  }

  buildTaskForm() {
    let htmlString = `<form action="post">
    User ID <input type="number" name="userId" /> <br>
    Task ID <input type="number" name="taskID" /> <br>
    Task Description<br><textarea name="taskDesc"></textarea> <br>
    Deadline <input type="date" name="deadline" /> <br>
    <input type="submit" value="Add Task">
    </form>`;

    return htmlString;
  }
}

module.exports = HTMLBuilder;
