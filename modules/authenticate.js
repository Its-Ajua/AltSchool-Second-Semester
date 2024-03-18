const http = require('http');

function getBodyFromStream(req) {
    return new Promise((resolve, reject) => {
        const data = [];
        req.on("data", (chunk) => {
            data.push(chunk);
        });
        req.on("end", () => {
            const body = Buffer.concat(data).toString();
            if (body) {
                resolve(JSON.parse(body));
            }
        });
    });
}

//function authenticate();

function getBooks(req, res) {
    console.log("getBooks", req.body)
    res.setHeader("Content-Type", "application/json");
    res.end();
}

function getAuthors(req, res) {
    console.log("getAuthors", req.body)
    res.setHeader("Content-Type", "application/json")
    res.end();
}

const server = http.createServer(async (req, res) => {
    const body = await getBodyFromStream(req);
    req.body = body;
    console.log("req.body", req.body);
    res.end();
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})