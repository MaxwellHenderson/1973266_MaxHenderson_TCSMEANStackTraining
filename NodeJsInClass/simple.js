module.exports.a = "Welcome to NodeJS Module Example";
module.exports.b = "Another simple message";
module.exports.dis = function () {
  return "Hello world";
};

exports.add = function (a, b) {
  return a + b;
};

let sayHello = (name) => "Welcome to user " + name;
exports.sayHi = sayHello;

class Employee {
  display() {
    console.log("display function");
  }
}

exports.Employee = Employee;
