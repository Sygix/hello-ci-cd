const Express = require("express");

const app = new Express();
const port = 1234;

app.get("*", (req, res) => {
  res.send("Hello 4INFO-D !\n");
});

app.listen(port, () => {
  console.log("Server is running on port " + port + "...");
});
