const express = require("express");

const candies = express.Router();
const { checkName } = require("../middleware/nameValidation.js");
const { checkAge } = require("../middleware/ageValidation.js");

const {
  getAllCandy,
  getOneCandy,
  updateCandy,
  deleteCandy,
} = require("../query/candy.js");

// candies.get("/", (request, response) => {
//   response.status(200).json({ message: "Candy Home Page" });
// });
candies.get("/", async (request, response) => {
  try {
    const allCandy = await getAllCandy();
    response.status(200).json({ allCandy });
  } catch (error) {
    response.status(404).json({ message: error });
  }
});

candies.get("/:candyID", async (request, response) => {
  const candyID = request.params.candyID;

  console.log(Number(candyID));
  if (Number(candyID)) {
    const oneCandy = await getOneCandy(candyID);

    response.status(200).json(oneCandy);
  } else {
    response.status(404).json({
      error: "id must be numeric value",
    });
  }
});

candies.post("/", checkName, checkAge, (request, response) => {
  const body = request.body;
  // console.log(body);
  response.status(200).json({ message: body });
});

candies.put("/:candyID", async (request, response) => {
  const candyID = request.params.candyID;
  const body = request.body;
  const updatedCandy = await updateCandy(body, candyID);

  if (updatedCandy.candyID) {
    response.status(200).json(updatedCandy);
  } else {
    response.status(404).json(updatedCandy);
  }
});

candies.delete("/:candyID", async (request, response) => {
  const candyID = request.params.candyID;
  if (Number(candyID)) {
    const deletedCandy = await deleteCandy(candyID);
    response.status(200).json(deletedCandy);
    if (deletedCandy.candyID) {
      response.status(200).json(deletedCandy);
    } else {
      response.status(500).json(deletedCandy);
    }
  } else {
    response.status(404).json({
      error: "candyID must be numeric",
    });
  }
});

module.exports = candies;
