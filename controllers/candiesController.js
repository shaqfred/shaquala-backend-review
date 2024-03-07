const express = require("express");

const candies = express.Router();
const { checkName } = require("../middleware/nameValidation.js");
const { checkAge } = require("../middleware/ageValidation.js");

const {
  getAllCandy,
  getOneCandy,
  updateCandy,
  deleteCandy,
  createCandy,
} = require("../query/candy.js");

// candies.get("/", (request, response) => {
//   response.status(200).json({ message: "Candy Home Page" });
// });
candies.get("/", async (request, response) => {
  try {
    const allCandy = await getAllCandy();
    response.status(200).json(allCandy);
  } catch (error) {
    response.status(404).json({ message: error });
  }
});

candies.get("/:candyID", async (request, response) => {
  const id = request.params.id;

  console.log(Number(id));
  if (Number(id)) {
    const oneCandy = await getOneCandy(id);

    response.status(200).json(oneCandy);
  } else {
    response.status(404).json({
      error: "id must be numeric value",
    });
  }
});

candies.post("/", async (request, response) => {
  const body = request.body;
  // console.log(body);
  const newCandy = await createCandy(body);
  // console.log(newCandy, "post");
  if (newCandy.id) {
    response.status(200).json(newCandy);
  } else {
    response.status(500).json(newCandy);
  }

  // console.log(body);
  // response.status(200).json({ message: body });
});

candies.put("/:id", async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  const updatedCandy = await updateCandy(body, id);

  if (updatedCandy.id) {
    response.status(200).json(updatedCandy);
  } else {
    response.status(404).json(updatedCandy);
  }
});

candies.delete("/:id", async (request, response) => {
  const id = request.params.id;
  if (Number(id)) {
    const deletedCandy = await deleteCandy(id);
    response.status(200).json(deletedCandy);
    if (deletedCandy.id) {
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
