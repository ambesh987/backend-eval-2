const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema({
  balance: {
    type: Number,
    require: [true, "Enter your balance"],
  },
  createdAt: {
    type: Date,
    require: [true, "createdAt is required"],
  },
  updatedAt: {
    type: Date,
    require: [true, "updatedAt is required"],
  },
});

module.exports = mongoose.model("MasterAccountDetail", masterAccountSchema);