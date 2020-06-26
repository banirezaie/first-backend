const EventEmitter = require("events");

//create an Emitter Class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on("event", () => {
  console.log("Event Fired!");
});

myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
