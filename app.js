const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from AWS CodePipeline!");
});

server.listen(3000, () => {
  console.log("App running on port 3000");
});
