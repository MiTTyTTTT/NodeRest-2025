require("dotenv").config();

const expres = require("express");
const app = expres();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
