const url = require("url");

const myUrl = new URL(
  "http://mynewwebsite.com:8000/hello.html?id=100&status=active"
);

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)  -> if don't use port it would be same as Host name
console.log(myUrl.host);

//Host name  --> it doesn't include the port name
console.log(myUrl.hostname);

//path name
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//create an object from this:
console.log(myUrl.searchParams);

//append child:
myUrl.searchParams.append("abcd", "8910");
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(value);
  console.log("and");
  console.log(name);
});
