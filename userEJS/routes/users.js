const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminRoutes = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const users = adminRoutes.users;
  res.render("users", {
    userList: users,
    pageTitle: "Users",
    path: "/",
    hasUsers: users.length > 0
  });
});

module.exports = router;
