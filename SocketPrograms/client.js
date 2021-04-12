let input = require("readline-sync");
let net = require("net");
let client = net.connect({ port: 9090, host: "localhost" });
let readline = require("readline");
let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdoutput,
});
client.on("connect", () => {
  console.log("Connected to server...");
  client.write("Hello World");
});

client.on("data", (data) => {
  console.log(data.toString());
});

r1.on("line", (data) => {
  client.write(`client send: ${data}`);
});
