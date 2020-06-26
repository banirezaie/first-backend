const fs = require("fs");
const path = require("path");

// //create folder
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created");
// });

// //then:

// //create and write to file
// fs.writeFile(
//   path.join(__dirname, "test", "Hello.txt"),
//   "Hello world!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to...");

//     //append file (to prevent overwrite)
//     fs.appendFile(
//       path.join(__dirname, "test", "Hello.txt"),
//       "I love programming",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

//Read file
// fs.readFile(path.join(__dirname, "test", "Hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//Rename file
fs.rename(
  path.join(__dirname, "test", "Hello.txt"),
  path.join(__dirname, "test", "Renamed_file.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);

//