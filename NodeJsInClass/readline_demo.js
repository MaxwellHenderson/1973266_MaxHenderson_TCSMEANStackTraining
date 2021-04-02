let obj = require("readline");

let r1 = obj.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter your name: \n", (name)=>{
    r1.question("Enter your age: \n", (age)=>{
        console.log("Your name is "+name+"\nYour age is "+age);
        r1.close();
    })
})