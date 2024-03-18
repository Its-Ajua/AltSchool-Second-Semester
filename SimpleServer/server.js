const http =  require("http");

const server = http.createServer((req, res) => {
    res.end("Akinlade Rebecca");
});

server.listen(8900, () => {
    console.log("Server is running on port 8900")
});