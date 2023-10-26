const { findUserQuery, createUserQuery } = require("../queries/userQuery");

const findUserService = async () => {
  try {
    const res = await findUserQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

const createUserService = async (username, email, password) => {
  try {
    const check = await findUserQuery({ username });

    if (check) throw new Error("username already exist");

    const res = await createUserQuery(username, email, password);
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = { createUserService };
