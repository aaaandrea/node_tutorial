let http = require("http"); // import Node.js core http module

let onRequest = (request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
};

http.createServer(onRequest).listen(8888); // create server and listen for incoming requests

// OR

// var server = http.createServer(function (req, res) {
//
//     handle incoming requests here..
//
// });
//
// server.listen(5000);
//
// console.log('Node.js web server at port 5000 is running..')
