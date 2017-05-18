# Node Tutorial Walkthrough
Resources include
  * [The Node Beginner Book](http://www.nodebeginner.org/)
  * [Code Mentor](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
  * [Node Guide](http://nodeguide.com/)

# Background
  Node.js is simultaneously a runtime environment and a library. Rather than relying on the browser, Node.js allows for a JavaScript backend to be run server-side. This means even-driven asynchronous calls, agnostic of the environment.

# Basic stack
  * HTTP server
  * Router
  * Request data handlers
  * View logic
  * Upload handling

# Building a server
  The Node.js is a single process server, which runs the code in a single thread. This means less resources than a multi-threaded/multi process server.

  ```
  let http = require("http");

  let onRequest = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  };

  http.createServer(onRequest).listen(8888);
  ```
