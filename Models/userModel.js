const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  accountID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "masterAcc",
  },

  firstName: {
    type: String,
    require: [true, "Please enter first Name"],
  },
  middleName: {
    type: String,
    require: [false, "Please enter middle Name"],
  },
  lastName: {
    type: String,
    require: [true, "Please enter last Name"],
  },
  age: {
    type: Number,
    require: [true, "Please enter Age"],
  },
  email: {
    type: String,
    require: [true, "email is required"],
    unique: true,
    lowercase: true,
  },
  address: {
    type: String,
    require: [true, "enter Address"],
  },
  gender: {
    type: String,
    default: "Female",
    require:[false, "enter gender"]
  },
  type: {
    type: String,
    enum: {
      values: ["customer", "employee"],
      message: "type must be customer or employee",
    },
    default: "customer",
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

module.exports = mongoose.model("User", userSchema);