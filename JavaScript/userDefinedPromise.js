var obj = new Promise(function (resolve, reject) {
  resolve("success"), reject("failure");
});

obj
  .then((data) => document.write(data))
  .catch((error) => document.write(error));
