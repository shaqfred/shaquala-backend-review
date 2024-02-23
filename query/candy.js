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
const updateCandy = async (body, id) => {
  //CREATE TABLE candy(
  // id ,
  // name ,
  // type ,
  // cost ,
  // isFavorite //
  try {
    const updatedCandy = await db.one(
      "UPDATE candy SET name=$1, type=$2, cost=$3, isFavorite=$4 WHERE id=$5 RETURNING *",
      [body.name, body.type, body.cost, body.isFavorite, id]
    );

    return updatedCandy;
  } catch (error) {
    return error;
  }
};
const deleteCandy = async (candyID) => {
  try {
    const deletedCandy = db.one(
      "DELETE FROM candy WHERE id=$1 RETURNING *",
      candyID
    );
    return deletedCandy;
  } catch (error) {
    return error;
  }
};
const createCandy = async (candy) => {
  try {
    const newCandy = await db.one(
      "INSERT INTO candy(name,type,cost,isFavorite) VALUES($1,$2,$3,$4)RETURNING *",
      [candy.name, candy.type, candy.cost, candy.isFavorite]
    );
    // console.log(newCandy);
    return newCandy;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCandy,
  getOneCandy,
  updateCandy,
  deleteCandy,
  createCandy,
};
