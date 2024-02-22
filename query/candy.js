const db = require("../db/dbConfig");

const getAllCandy = async () => {
  try {
    const allCandy = await db.any("SELECT * FROM candy");
    return allCandy;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCandy,
};
