const express = require("express");

const journals = express.Router();

journals.get("/", (request, response) => {
  response.status(200).json({ message: "Journals Home Page" });
});

module.exports = journals;
