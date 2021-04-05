// var obj = new Promise((resolve, reject)=>{
//     reject("Promise rejected. Error.")
//     resolve("Promise resolved...")
// });

// obj.then(res=>console.log("resolve")).catch(error=>console.log("rejected"));

// let emp = {"id":100, "name":"Ramesh", age:21}
// var obj = new Promise((resolve, reject) =>{
//     resolve(emp),
//     reject({"msg":"Error generated"})
// });

// obj.then(result=>console.log(result)).catch(error=>console.log(error))

var fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(result=>console.log(result))
    .catch(error=>console.log(error));