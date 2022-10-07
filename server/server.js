const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000;
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

//Create an instance of express
const app = express();

//Connect with MongoDB DB - todo
mongoose
  .connect("mongodb://localhost:27017/blogapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Success..!");
  })
  .catch(() => {
    console.log("Connection Unsuccessful..!");
  });

app.use(bodyParser.json());
app.use(cors());
app.use("/api", userRoutes);
app.use("/api", postRoutes);

//Start Server
app.listen(PORT, () => {
  console.log("Server Started on Port:", PORT);
});
