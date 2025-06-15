import express from 'express';

const app = express();

const html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>hello world </h1>
</body>
</html>`;

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(3002, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3002');
});