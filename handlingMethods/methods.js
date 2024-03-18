const http = require('http');

const behavior = (req, res)=>{
  if (req.url === "/books" && req.method === "GET") {
      res.write("Get request");
    } 
  if (req.url === "/books" && req.method === "PUT") {
      res.write("Put request");
      }
  if (req.url === "/books" && req.method === "DELETE") {
      res.write("Delete request");
    } 
  if (req.url === "/books/author/" && req.method === "GET") {
      res.write("Get request");
    }
  if (req.url === "/books/author/" && req.method === "POST") {
      res.write("Post request");
    }
  if (req.url === "/books/author/" && req.method === "PUT") {
      res.write("Put request");
    };


console.log(req.url);
res.end();
};

const server = http.createServer(behavior);

server.listen(8900, () => {
  console.log("Server is working");
});