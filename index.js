const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "docs")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "docs", "/introduction/welcome.html"));
});

app.listen(3000, () => {
  console.log("--- started ---");
});
