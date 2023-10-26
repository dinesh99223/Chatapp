const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeUser } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group/create").post(protect, createGroupChat);
router.route("/group/rename").put(protect, renameGroup);
router.route("/group/add").put(protect, addToGroup);
router.route("/group/removeUser").put(protect, removeUser);

module.exports = router;
