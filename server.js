import { createServer } from 'node:http';
import fs from 'node.fs'
const image = fs.ReadFile('/IMG_3905.jpg')

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    res.end('Hello World!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});