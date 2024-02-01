const express = require("express");
const {
  register,
  login,
  getCetificateData,
  getAllUser,
  approveForm,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/getClc", getCetificateData);
router.get("/getAllUser", getAllUser);
router.post("/approve", approveForm);

module.exports = router;
