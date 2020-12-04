const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();
//import routes
const postRoute = require("./routes/posts");

app.get("/", (req, res) => {
  res.send("home");
});

//middleware
app.use("/posts", postRoute);
app.use(bodyParser.json());

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },

  () => console.log("connected to db !")
);

app.listen(4000);
