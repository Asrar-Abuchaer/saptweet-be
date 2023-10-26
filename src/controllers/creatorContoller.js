const {
  findCreatorService,
  createCreatorService,
} = require("../services/creatorService");

const findCreatorController = async (req, res, fullname) => {
  try {
    const result = await findCreatorService(fullname);
    return res.status(200).json({
      message: "find creator controller success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const createCreatorController = async (req, res) => {
  try {
    const { fullname, address } = req.body;
    const result = await createCreatorService(fullname, address);
    console.log(result);
    console.log(res);

    return res.status(200).json({
      message: "create new creator success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  findCreatorController,
  createCreatorController,
};
