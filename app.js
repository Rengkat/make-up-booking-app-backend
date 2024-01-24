const express = require("express");
const users = require("./routes/users");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/v1", users);
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
