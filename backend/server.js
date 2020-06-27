//--------------------------------------------
//first //if you don't use React, you need to make a package.json:
//npm init -y
//--------------------------------------------
//then //you need to install express:
//npm i express
//then // you need to define it in index.js like this exactly:
const express = require("express");
const app = express();
//-----------------------------------------------
//then //if you don't use React you need to define these in your index.js as well:
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`server started on port ${PORT}`));
//-----------------------------------------------
// and also
//npm install uuid (for node)

const path = require("path");
const members = require("../src/members");
const moment = require("moment");

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUlr
    }:${moment().format()}`
  );
  next();
};

app.get("/api/members", (req, res) => {
  res.send(members);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!!</h1>");
  //res.json
  //res.render()
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//app.post()
//app.delete()
//app.put()
//,ect

//-------
/* you can also have nodemon:
npm i -D nodemon
and you can see it in dev dependencies in package.json
then in the scripts: you need :
start: "node index"
dev : "nodemon index"
to have automatic server update
*/
//-------
app.listen(5000, () => {
  console.log("it is on port 5000");
  //fetch from database
  //Load pages
  //return JSON
  //full access to request and response
});

const Person = require("./person");
const person1 = new Person("Bani", 29);

person1.greeting();
