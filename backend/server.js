const express = require("express");
//npm install express
// and also
//npm install uuid

const app = express();


app.get("/", () => {});
//app.post()
//app.delete()
//app.put()
//,ect

app.listen(4000, () => {
  console.log("it is on port 4000");
  //fetch from database
  //Load pages
  //return JSON
  //full access to request and response
});

const Person = require("./person");
const person1 = new Person("Bani", 29);

person1.greeting();
