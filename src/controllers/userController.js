const { createUserService } = require("../services/userService");

const createUserController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const result = await createUserService(username, email, password);

    return res.status(200).json({
      message: "Create User Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = { createUserController };
