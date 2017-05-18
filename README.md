## Node Notes
**Resources include:**
  * [Node.js](https://nodejs.org/en/)
  * [Node Guide](http://nodeguide.com/)
  * [Tutorials Teacher](http://www.tutorialsteacher.com/nodejs/what-is-nodejs)
  * [The Node Beginner Book](http://www.nodebeginner.org/)
  * [Code Mentor](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)

### Background
  Node.js is simultaneously a runtime environment and a library. Rather than relying on the browser, Node.js allows for a JavaScript backend to be run server-side. This means even-driven asynchronous calls, agnostic of the environment.

### Basics
  * Buffer - an additional data type mainly used to store binary data while receiving packets over the network.
  * Process Object - object which retains all the information  about the current process
  * Global Scope - Node.js defaults to local.
    * must use import/export to add something to the global scope
  * Stack
    * HTTP server
    * Router
    * Request data handlers
    * View logic
    * Upload handling


### Node REPL
  Read - Eval - Print - Loop

  | REPL Command     | Description                              |
  |------------------|------------------------------------------|
  | .help            | Display help commands                    |
  | tab keys         | Display list of comands                  |
  | up/down          | See previous commands                    |
  | .save <filename> | Save current Node REPL session to a file |
  | .load <filename> | Load specified file                      |
  | ctrl + c         | Terminate current command                |
  | ctrl + c (twice) | Exit REPL                                |
  | ctrl + d         | Exit REPL                                |
  | .break           | Exit multiline expression                |
  | .clear           | Exit multiline expression                |


### Building a server
  The Node.js is a single process server, which runs the code in a single thread. This means less resources than a multi-threaded/multi process server. An event loop runs asynchronously, executing the response when the job completes.

  ```
  let http = require("http");

  let onRequest = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  };

  http.createServer(onRequest).listen(8888);
  ```


### Modules
  1. Core Modules - modules inherent to Node.js
    * To load a module: ` let module = require('module');`
    * These are compiled and loaded when the Node.js process starts

  | Core Module | Description                                   |
  |-------------|-----------------------------------------------|
  | http        | classes, methods, and events to create server |
  | url         | methods for URL parsing                       |
  | querystring | deals with query                              |
  | path        | deals with file path                          |
  | fs          | classes, methods, and events for file I/O     |
  | util        | useful functions                              |


  2. Local Modules - provide different functionalities. distributed by the community.

    * Writing a module [Source](http://www.tutorialsteacher.com/nodejs/nodejs-local-modules)

      log.js
      ```
      var log = {
            info: function (info) {
                console.log('Info: ' + info);
            },
            warning:function (warning) {
                console.log('Warning: ' + warning);
            },
            error:function (error) {
                console.log('Error: ' + error);
            }
          };

      module.exports = log
      ```

    * Loading a module
      app.js
      ```
      var myLogModule = require('./Log.js');

      myLogModule.info('Node.js started');
      ```
