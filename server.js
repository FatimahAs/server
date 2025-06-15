import { createServer } from 'node:http';
import fs from 'node:fs';
const image = fs.readFileSync('cat.png')

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image);
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});