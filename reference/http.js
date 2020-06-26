const http = require("http");
const { hasUncaughtExceptionCaptureCallback } = require("process");

//create server object
http
  .createServer((req, res) => {
    //write response
    res.write("Hello world!");
    res.end();
  })
  .listen(5000, () => console.log("server running..."));

  //now run the server with 1-type directory in terminal (node ./reference/http) 2-go to the webpage (http://localhost:5000/)
  // for stop server to running use control+C in the terminal