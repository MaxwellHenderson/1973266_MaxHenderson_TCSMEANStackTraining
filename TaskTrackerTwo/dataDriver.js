let fs = require("fs");
class DataDriver {
  tasksJSON = {};
  taskMap = new Map();

  constructor() {
    this.initDataDriver();
  }

  //Gets the tasks from the .json file and turns them into a Map for use by the map
  initDataDriver() {
    this.retrieveTasks();
    this.taskMap = this.objectToMap(this.tasksJSON);
  }

  //"Local" functions. These operate on the data that is local to this class
  //Used to retrieve the tasks as an array
  getTasks() {
    return this.taskMap;
  }

  //Checks whether the taskId is already in use
  taskExists(taskId) {
    return this.taskMap.has(taskId);
  }

  //Returns true if task successfully added, false if task ID already exists
  addTask(empId, taskId, taskDesc, deadline) {
    if (this.taskExists(taskId)) return false;
    let newTask = {
      empId: empId,
      taskId: taskId,
      taskDesc: taskDesc,
      deadline: deadline,
    };
    this.taskMap.set(taskId, newTask);
    this.storeTasks();
    return true;
  }

  //Turns the object into a map for easy data setting and deleting
  objectToMap(obj) {
    const mp = new Map();
    Object.keys(obj).forEach((k) => {
      mp.set(k, obj[k]);
    });
    return mp;
  }

  //Removes the task from the map, and updates the .json file
  deleteTask(taskID) {
    this.taskMap.delete(taskID);
    this.storeTasks();
  }

  //"Server" functions. These access the "remote" JSON file
  //Retrieves the data json object
  retrieveTasks() {
    this.tasksJSON = JSON.parse(fs.readFileSync("tasks.json"));
  }

  storeTasks() {
    this.tasksJSON = Object.fromEntries(this.taskMap);
    fs.writeFileSync("tasks.json", JSON.stringify(this.tasksJSON));
  }
}

module.exports = DataDriver;
