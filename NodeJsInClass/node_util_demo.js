// var obj = require("util");
// let name = "Raj Deep";
// let age = 21
// var formatDetails= obj.format("My Name is %s and age is %d",name,age);

// let empInfo = {"id":100,"name":"Ravi","salary":12000,"skill":["C","Java"]}
// var formatJsonData = obj.format("Employee details ", empInfo);

// console.log(formatDetails)
// console.log(formatJsonData)

var util = require("util");
var empInfo = require("./empInfo.js")

let emp = new empInfo.Employee();

console.log(util.inspect(empInfo))
console.log(util.inspect(empInfo, {showHidden:true}))
// console.log(util.inspect(emp))