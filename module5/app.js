const path = require("path");
// Import Express.js
const express = require("express");
// Import body parser
const bodyParser = require("body-parser");
// Create an Express application
const app = express();
// Imports admin routes
const adminRoutes = require("./routes/admin");
// Imports shop routes
const shopRoutes = require("./routes/shop");
// Registers a middleware that parses the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
