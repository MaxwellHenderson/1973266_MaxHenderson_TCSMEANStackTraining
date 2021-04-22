let app = require("express")();

app.get("/", (req, res) => {
  res.send("Welcome to Express Module using Docker");
});

app.listen(9999, () => console.log("server is running on port 9999"));
