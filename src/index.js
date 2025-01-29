const express = require('express');
const fs = require('fs');

const PORT = 8000;

const app = express();
app.use(express.json());

fs.writeFile('./test.txt', 'just a test\nanother line', (err) => {
  err ? console.log(err) : console.log('Content successfully written.');
});

fs.readFile('./test.txt', 'utf-8', (err, content) => {
  err ? console.log(err) : console.log(content);
});

const readStream = fs.createReadStream('./test.txt', 'utf-8');
const writeStream = fs.createWriteStream('./test2.txt');

readStream.pipe(writeStream);

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.file);
});

app.listen(PORT, () => console.log('server connected and listening to requests...'));
