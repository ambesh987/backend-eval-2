const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://ambeshpm:Ambeshpmxd3458@cluster0.brhhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(console.log("DB Connected"));
};