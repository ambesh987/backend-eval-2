const express = require("express");
const { addMasterAcc } = require("../Controllers/masterAcc");
const router = express.Router();

router.route("/").post(addMasterAcc);

module.exports = router;