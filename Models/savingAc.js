const mongoose = require("mongoose");

const savingAccountSchema = new mongoose.Schema({
  account_number: {

    type: Number,
    require: [true, "Enter Account number"],
    unique: true,
  },
  balance: {
    type: Number,
    require: [true, "Enter balance"],
  },
  interestRate: {
    type: Number,
    require: [true, "Enter interest rate"],
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

module.exports = mongoose.model("SavingAccountDetails", savingAccountSchema);