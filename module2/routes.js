const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html><body>");
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>"
    );
    res.write("</body></html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    // Data arrives in chunks
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    // Creates a buffer and adds all chunks to the body
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[0];
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  // Super complicated way to send response data, Express will make this easier
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body>");
  res.write("<h2>Hello from the server</h2>");
  res.write("</body></html>");
  res.end();
};

module.exports = requestHandler;
