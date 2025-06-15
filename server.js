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

//______________server html 'Content-Type'_______________

//import { createServer } from 'node:http';

//const html = `<!DOCTYPE html>
//<html lang="en">
//<head>
//	<meta charset="UTF-8">
//	<meta name="viewport" content="width=device-width, initial-scale=1.0">
//	<title>Document</title>
//</head>
//<body>
//	<h1>hello world </h1>
//</body>
//</html>`

//const server = createServer((req, res) => {
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.end(html);
//});

//server.listen(3000, '127.0.0.1', () => {
//    console.log('Listening on 127.0.0.1:3000');
//});

// _________________redirect to outsourced image 'StatusCode'____________

//import { createServer } from 'node:http';

//const server = createServer((req, res) => {
//	res.writeHead(303, {
//		'Content-Type': 'text/plain', 
//		"location" : 'https://www.happyhues.co/palettes/17'

//	});
//    res.end();
//});

//server.listen(3000, '127.0.0.1', () => {
//    console.log('Listening on 127.0.0.1:3000');
//});