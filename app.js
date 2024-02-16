const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.status(200).send("<h1>Test Backend Server<h1>");
});

app.get("*", (request, response) => {
  response.status(404).json({
    Error: "Page not Found",
  });
});

module.exports = app;
