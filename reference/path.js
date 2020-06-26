const path = require("path");
//run in the terminal : node ./reference/path

// Base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//concatenate path
console.log(
  path.join(__dirname, "something_for_example", "another_thing.html")
);
