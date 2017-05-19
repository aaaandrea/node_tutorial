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

    * Writing a module

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

3. module.exports
  * literals

    message.js
    ```
    module.exports = 'Hello world';

    //or

    exports = 'Hello world';
    ```

    app.js
    ```
    var msg = require('./Messages.js');

    console.log(msg);
    ```

  * exports - an object which can have methods attached.

    message.js
    ```
    exports.SimpleMessage = 'Hello world';

    //or

    module.exports.SimpleMessage = 'Hello world';
    ```

    app.js
    ```
    var msg = require('./Messages.js');

    console.log(msg.SimpleMessage);
    ```


### Node Package Manager: npm
  Online repository for open-source packages which provide useful modules for Node.js
  [Official Site](https://www.npmjs.com)
  [Docs](https://docs.npmjs.com/)

  * `npm install`
  * `npm install <package name>`
  * `npm install <package name> --save` - adds dependency to package.json
  * `npm install -g <package name>` - installs package globally
  * `npm update <package name>` - updates package
  * `npm uninstall <package name>` - uninstalls package

  package.json
  ```
  {
    "name": "NodejsConsoleApp",
    "version": "0.0.0",
    "description": "NodejsConsoleApp",
    "main": "app.js",
    "author": {
      "name": "Dev",
      "email": ""
    },
    "dependencies": {
      "express": "^4.13.3"
    }
  }
  ```


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

  1. Import the core http module from Node.js
  2. Handle incoming requests
  3. Create Server (passed callback for when there is a request)
      * request: gets information about current HTTP request
      * response: used to send a response for HTTP request
  4. Listen for incoming requests


### Files
  The fs module is responsible for asynchronous and synchornous I/O file operations

  fs methods
  | Method                                            | Description                                                                               |
  |---------------------------------------------------|-------------------------------------------------------------------------------------------|
  | fs.readFile(fileName [,options], callback)        | Reads existing file.                                                                      |
  | fs.writeFile(filename, data[, options], callback) | Writes to the file. If file exists then overwrite the content otherwise creates new file. |
  | fs.open(path, flags[, mode], callback)            | Opens file for reading or writing                                                         |
  | fs.rename(oldPath, newPath, callback)             | Renames an existing file.                                                                 |
  | fs.chown(path, uid, gid, callback)                | Asynchronous chown.                                                                       |
  | fs.stat(path, callback)                           | Returns fs.stat object which includes important file statistics.                          |
  | fs.link(srcpath, dstpath, callback)               | Links file asynchronously.                                                                |
  | fs.symlink(destination, path[, type], callback)   | Symlink asynchronously.                                                                   |
  | fs.rmdir(path, callback)                          | Renames an existing directory.                                                            |
  | fs.mkdir(path[, mode], callback)                  | Creates a new directory.                                                                  |
  | fs.readdir(path, callback)                        | Reads the content of the specified directory.                                             |
  | fs.utimes(path, atime, mtime, callback)           | Changes the timestamp of the file.                                                        |
  | fs.exists(path, callback)                         | Determines whether the specified file exists or not.                                      |
  | fs.access(path[, mode], callback)                 | Tests a user's permissions for the specified file.                                        |
  | fs.appendFile(file, data[, options], callback)    | Appends new content to the existing file.     

#### Reading Files
  * fs.readFile(fileName, [options], callback): async
    * fileName: full path and name of the file as a string
    * options: can be an object or string with encoding and flag. Default encoding is utf8 and flag is 'r'
    * callback: function with two parameters(err, fd) which will be called when readfile operation completes

    ```
    var fs = require('fs');

    fs.readFile('TestFile.txt', function (err, data) {
        if (err) throw err;

        console.log(data);
    });
    ```

  * fs.readFileSync(fileName, encoding)

    ```
    var fs = require('fs');

    var data = fs.readFileSync('dummyfile.txt', 'utf8');
    console.log(data);
    ```

#### Writing Files
  * fs.writeFile(filename, data, [options], callback)
    * only difference from before is 'data' which is just the content to be written in the file

    async: creating AND writing a file

    ```
    var fs = require('fs');

    fs.writeFile('test.txt', 'Hello World!', function (err) {
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });
    ```

    async: appends to existing file

    ```
    var fs = require('fs');

    fs.appendFile('test.txt', 'Hello World!', function (err) {
        if (err)
            console.log(err);
        else
            console.log('Append operation complete.');
    });

    ```

#### Opening Files
  * fs.open(path, flags, [mode], callback)
    * Flag: The flag to perform operation
    * Mode: The mode for read, write or readwrite. Defaults to 0666 readwrite.

    Flags

    | Flag | Description                                                |
    |------|------------------------------------------------------------|
    | r    | Open file (read only); exception if file does not exist    |
    | r+   | Open file (read + write); exception if file does not exist |
    | rs   | Open file (read + write): sync                             |
    | rs+  | Open file (read + write), tell OS to do so sync            |
    | w    | Open (write only); creates or appends                      |
    | wx   | Like 'w', but fails if path exists                         |
    | w+   | Open file (read + write_; creates or appends               |
    | wx+  | Like 'w+,' but fails if path exists                        |
    | a    | Open file (update); creates if path does not exist         |
    | ax   | Like 'a,' but fails if path exists                         |
    | a+   | Open file (read + append); creates if it does not exist    |
    | ax+  | Like 'a+,' but fails if path exists                        |


    File open and read

    ```
    var fs = require('fs');

    fs.open('TestFile.txt', 'r', function (err, fd) {

        if (err) {
            return console.error(err);
        }

        var buffr = new Buffer(1024);

        fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {

            if (err) throw err;

            // Print only read bytes to avoid junk.
            if (bytes > 0) {
                console.log(buffr.slice(0, bytes).toString());
            }

            // Close the opened file.
            fs.close(fd, function (err) {
                if (err) throw err;
            });
        });
    });
    ```


#### Deleting Files
  * fs.unlink(path, callback)

    File open and read

    ```
    var fs = require('fs');

    fs.unlink('test.txt', function () {

        console.log('write operation complete.');

    });

    ```
