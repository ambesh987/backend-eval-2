const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://ambeshpm:Ambeshpm%402304@cluster0.qtsug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(console.log("DB Connected"));
};