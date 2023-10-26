const express = require("express");
const {
  registerUser,
  login,
  allUsers,
} = require("../controllers/userControllers");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();


router.route("/register").post(registerUser)
router.route("/")get(protect, allUsers);
router.route("/login").post(login);


module.exports = router;
