const express = require("express");
const router = express.Router();

const { createUserController } = require("../controllers/userController");

router.get("/", createUserController)
router.post("/", createUserController);
module.exports = router;
