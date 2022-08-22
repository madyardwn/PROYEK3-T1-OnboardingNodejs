console.log("Hello Node.js");

const fs = require("fs");
fs.writeFileSync("notes.txt", "I live in Philadelphia");

const checkUtils = require("./src/utils.js");
checkUtils();

const validator = require("validator");
console.log(validator.isURL("https/mead.io")); // Print: true
