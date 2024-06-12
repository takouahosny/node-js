const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        //res.write ();
        res.end("<h1>hello world </h1>");
    }

});


server.listen(5000, (err) => {
    if (err) throw err
    console.log("server is up and running on port 5000")
});