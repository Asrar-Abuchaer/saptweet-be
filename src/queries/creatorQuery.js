const db = require("../models");
const creator = db.creator;
const { Op } = require("sequelize");

const findCreatorQuery = async ({ fullname = null }) => {
  try {
    const params = {};
    if (fullname === null) {
      const res = await creator.findAll({
        where: {
          ...params,
        },
      });
      return res;
    } else {
      params.fullname = fullname;
      const res = await creator.findOne({
        where: {
          ...params,
        },
      });
      return res;
    }
  } catch (err) {
    throw err;
  }
};
const createCreatorQuery = async (fullname, address) => {
  try {
    await db.sequelize.transaction(async (t) => {
      await creator.create(
        {
          fullname,
          address,
        },
        {
          transaction: t,
        }
      );
    });
  } catch (err) {
    throw err;
  }
};


module.exports = {
  findCreatorQuery,
  createCreatorQuery,
};
