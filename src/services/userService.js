const {
  findUserQuery,
  createUserQuery,
  updateUserQuery,
} = require("../queries/userQuery");

const findAllUserService = async (username) => {
  try {
    const res = await findUserQuery({ username });
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

const updateUserService = async (id, username, email, password) => {
  const check = await findUserQuery({ id });

  if (!check) throw new Error("username doesnt exist");

  const res = await updateUserQuery(id, username, email, password);
  return res;
};
module.exports = {
  createUserService,
  findUserQuery,
  findAllUserService,
  updateUserService,
};
