const express = require("express");
const dbconnect = require("./DBconnect/server");
const app = express();
const userRoutes = require("./Routes/userRoutes");
const masterAccRoutes = require("./Routes/masterAcc");
app.use(express.json());

app.use("/user", userRoutes);
app.use("/createmasteracc", masterAccRoutes);
app.use("/user", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  dbconnect();
  console.log(`App running on port ${PORT}`);
});

module.exports = app;