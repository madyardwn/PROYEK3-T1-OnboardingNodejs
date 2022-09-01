const path = require("path");
const express = require("express");
const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index", {
    title: "My title",
    name: "Achmadya Ridwan",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
