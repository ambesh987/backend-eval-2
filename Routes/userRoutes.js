const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({
    status: "sucessful",
  });
});


module.exports = router;