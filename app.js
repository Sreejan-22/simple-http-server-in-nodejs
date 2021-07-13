const http = require("http");
const fs = require("fs");


const port = 3000;

// create a server
const server = http.createServer((req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if(err) {
      res.writeHead(404);
      res.write("File Not Found");
    } else {
      res.writeHead(200, { "Content-type": "text/html" })
      res.write(data);
    }
    res.end();
  })
  // console.log(req.method, req.url);
  // res.write("<h1>hello world</h1>");
})

// get the server to listen to the port
server.listen(port, (err) => {
  if(err) {
      console.log("Oops!! Something went wrong");
      console.log(err);
  } else {
      console.log("Server listening on port " + port);
  }
})



