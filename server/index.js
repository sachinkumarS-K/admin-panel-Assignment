const express = require("express");
const dbConnect = require("./config/db");
const userRoutes = require("./routes/userRouts.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 8000;
const app = express();
dbConnect();
app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log("Server is listining on port : ", port);
});

app.get("/", (req, res) => {
  return res.send("hello from backend");
});
