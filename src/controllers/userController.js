const {
  createUserService,
  findAllUserService,
  updateUserService,
} = require("../services/userService");

const createUserController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const result = await createUserService(username, email, password);
    return res.status(200).json({
      message: "Create User Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const findAllUserController = async (req, res) => {
  try {
    const { username } = req.query;
    const result = await findAllUserService(username);
    return res.status(200).json({
      message: "Find User Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    const result = await updateUserService(id, username, email, password);
    return res.status(200).json({
      message: "success update user data",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createUserController,
  findAllUserController,
  updateUserController,
};
