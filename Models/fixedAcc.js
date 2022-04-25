const mongoose = require("mongoose");

const fixedAccountSchema = new mongoose.Schema({
  account_number: {
    type: Number,
    require: [true, "Enter your account number"],
    unique: true,
  },
  balance: {
    type: Number,
    require: [true, "Enter your balance"],
  },
  interestRate: {
    type: Number,
    require: [true, "Enter interest rate"],
  },
  startDate: {
    type: Date,
    require: [true, "Enter start date"],
  },
  maturityDate: {
    type: Date,
    require: [true, "Enter maturity date"],
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

module.exports = mongoose.model("FixedAccountDetails", fixedAccountSchema);