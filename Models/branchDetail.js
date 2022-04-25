const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({

  name: {
    type: String,
    require: [true, "Enter Branch Name"],
  },
  address: {
    type: String,
    require: [true, "Enter branch address"],
  },
  IFSC: {
    type: String,
    require: [true, "Enter IFSC"],
  },
  MICR: {
    type: Number,
    require: [true, "Enter your branch MICR"],
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

module.exports = mongoose.model("BranchDetails", branchSchema);