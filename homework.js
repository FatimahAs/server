import express from 'express';
import fs from 'node:fs';

const app = express();
const image = fs.readFileSync('cat.png');

app.get('/', (req, res) => {
    res.send(image);
});

app.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});