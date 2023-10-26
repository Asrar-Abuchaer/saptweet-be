const {
  findCreatorQuery,
  createCreatorQuery,
} = require("../queries/creatorQuery");

const findCreatorService = async (fullname) => {
  try {
    const res = await findCreatorQuery(fullname);
    return res;
  } catch (err) {
    throw err;
  }
};

const createCreatorService = async (fullname, address) => {
  try {
    const check = await findCreatorQuery({ fullname });
    if (check) throw new Error("Creator already exist");
    const res = await createCreatorQuery(fullname, address);
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findCreatorService,
  createCreatorService,
};
