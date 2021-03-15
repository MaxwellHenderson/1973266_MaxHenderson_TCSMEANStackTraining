function Employee(id, name) {
  this.id = id;
  this.name = name;

  this.display = function () {
    document.write("<br/>");
    document.write("id is " + this.id);
    document.write("<br/>name is " + this.name);
  };
}

var emp1 = new Employee();
emp1.display();
