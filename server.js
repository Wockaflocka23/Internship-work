const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'sample.txt');

    if (req.url === '/create') {
        fs.writeFile(filePath, 'Hello, this is a test file!', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error creating file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File created successfully');
            }
        });
    } else if (req.url === '/read') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            }
        });
    } else if (req.url === '/delete') {
        fs.unlink(filePath, (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error deleting file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File deleted successfully');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid route');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
