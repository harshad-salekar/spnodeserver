const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from my Node server on port 5000');
}).listen(5000, () => console.log('Listening on 5000'));
