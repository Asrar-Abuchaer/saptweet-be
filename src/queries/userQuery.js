const db = require("../models");
const user = db.user;

const { Op } = require("sequelize");

const findUserQuery = async () => {
  try {
    const params = {};
    if (username) params.username = username;
    const res = await branch.findOne({
      where: {
        ...params,
      },
    });
  } catch (err) {
    throw err;
  }
};

const createUserQuery = async (username, email, password) => {
  try {
    await db.sequelize.transaction(async (t) => {
      await branch.create({
        username,
        email,
        password,
      }),
        {
          transaction: t,
        };
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findUserQuery,
  createUserQuery,
};
