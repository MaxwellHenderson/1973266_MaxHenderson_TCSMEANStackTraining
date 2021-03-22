//1st fucntion passing parameter with different type of values
function empInfo(id, name, salary) {
    console.log(id + " " + name + " " + salary);
}
empInfo(123, "adsf", 123);
//Type requirement on return type
function sayHello(name) {
    return "Hello " + name;
}
//If you use *void* as the return type, function CANNOT return
//Default parameter
function personDetails(id, name, age) {
    if (age === void 0) { age = 10; }
    console.log(id + " " + name + " " + age);
}
personDetails(123, "bill", 1000);
