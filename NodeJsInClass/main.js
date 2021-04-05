let simple = require("./simple.js");
console.log(simple.a);
console.log(simple.b);
console.log(simple.dis());
console.log(simple.add(4, 6));

console.log(simple.sayHi("Frank"));

let emp = new simple.Employee();
emp.display();
