import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.redirect(303, 'https://www.happyhues.co/palettes/17');
});

app.listen(3001, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3001');
});