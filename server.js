const http = require("http");

const body = require('./body')

const server = http.createServer(body);

const PORT = 3031;
server.listen(PORT,() => {
  console.log(`Server is listening to http://localhost:${PORT}`)
})