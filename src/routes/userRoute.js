const express = require("express");
const router = express.Router();

const {
  createUserController,
  findAllUserController,
  updateUserController,
} = require("../controllers/userController");

router.get("/", findAllUserController);
router.post("/", createUserController);
router.patch("/:id", updateUserController);
module.exports = router;
