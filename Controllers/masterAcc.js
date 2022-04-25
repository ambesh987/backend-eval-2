const masterAccModel = require("../Models/masterAcc");
const user = require("../Models/userModel");

module.exports.addMasterAccount = async (req, res) => {
  try {
    const accountDetails = await masterAccModel.insertOne(req.body);
    res.status(200).json({
      status: "added",
      data: accountDetails,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
    });
  }
};