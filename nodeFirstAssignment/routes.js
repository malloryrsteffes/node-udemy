const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html><body>");
    res.write(
      "<div style='text-align: center'><h1>Hello! Enter your username here.</h1>"
    );
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></form>"
    );
    res.write("<div><body></html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html><body>");
    res.write("<ul><li>Bob</li>");
    res.write("<li>Sue</li>");
    res.write("<li>Ann</li></ul>");
    res.write("<body></html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    // Data arrives in small chunks
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    // Creates a buffer, adds all chunks to the body variable
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      res.writeHead(301, { Location: "http://" + req.headers["host"] + "/" });
      return res.end();
    });
  }
};

module.exports = requestHandler;
