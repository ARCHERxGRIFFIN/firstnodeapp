console.log("hello")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <html>
  <body>
  <h1>hello its my first node js file</h1>
  <img src="https://i1.sndcdn.com/artworks-000289961642-tgqzf7-t500x500.jpg" alt="img">
  <button>click</button>
  </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
