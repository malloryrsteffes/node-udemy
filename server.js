// Import HTTP, FS
const http = require("http");

const routes = require("./routes");

// Create Server callback function
const server = http.createServer(routes);

// Will keep the server open on the specified port
server.listen(3000);
