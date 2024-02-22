const db = require("../db/dbConfig");

const getAllCandy = async () => {
  try {
    const allCandy = await db.any("SELECT * FROM candy");
    return allCandy;
  } catch (error) {
    return error;
  }
};
const getOneCandy = async (candyID) => {
  try {
    const oneCandy = await db.one("SELECT * FROM candy WHERE id=$1", candyID);
    return oneCandy;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCandy,
  getOneCandy,
};
