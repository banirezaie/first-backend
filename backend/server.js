// const express = require("express");
//npm install express
// and also
//npm install uuid

// const app = express();

// app.get("/", () => {});

// app.listen(3000, () => {
//   console.log("it is on port 3000");
// });

const Person = require("./person");
const person1 = new Person("Bani", 29);

person1.greeting();
