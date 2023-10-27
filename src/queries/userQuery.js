const db = require("../models");
const user = db.user;

const { Op } = require("sequelize");

const findAllUserQuery = async (username) => {
  try {
    const filter = {};
    if (username)
      filter.where = {
        username: {
          [Op.like]: `%${username}%`,
        },
      };
    const res = await user.findAll({});
    return res;
  } catch (err) {
    throw err;
  }
};

const findUserQuery = async ({ username = null }) => {
  try {
    const params = {};
    if (username) params.username = username;
    const res = await user.findOne({
      where: {
        ...params,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const createUserQuery = async (username, email, password) => {
  try {
    await db.sequelize.transaction(async (t) => {
      await user.create({
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

const updateUserQuery = async (id, username, email, password) => {
  try {
    const res = await user.update(
      {
        username,
        email,
        password,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  findUserQuery,
  createUserQuery,
  findAllUserQuery,
  updateUserQuery,
};
