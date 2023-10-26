const express = require("express");
const router = express.Router();

const {
  findCreatorController,
  createCreatorController,
} = require("../controllers/creatorContoller");

router.get("/", findCreatorController);
router.post("/", createCreatorController);

module.exports = router;
