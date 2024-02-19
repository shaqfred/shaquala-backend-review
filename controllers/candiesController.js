const express = require("express");

const candies = express.Router();

candies.get("/", (request, response) => {
  response.status(200).json({ message: "Candy Home Page" });
});

candies.get("/:candyID", (request, response) => {
  const candyID = request.params.candyID;

  console.log(Number(candyID));
  if (Number(candyID)) {
    response.status(200).json({ message: candyID });
  } else {
    response.status(404).json({
      error: "id must be numeric value",
    });
  }
});

module.exports = candies;
