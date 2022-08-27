const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};
// Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// Covert JSON string into object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject.title); // Print: Ego is the Enemy
