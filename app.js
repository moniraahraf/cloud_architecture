const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        const indexPage = fs.readFileSync('./front.html', 'utf-8');
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(indexPage);
    } else if (req.method === 'GET' && req.url === '/style.css') {
        const stylePage = fs.readFileSync('./style.css', 'utf-8');
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(stylePage);
    } else if (req.method === 'GET' && req.url === '/javaa.js') { 
        const scriptFile = fs.readFileSync('./javaa.js', 'utf-8');
        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end(scriptFile);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

server.listen(3002, () => {
    console.log("Server is running on port 3002");
});
