const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.listen(4000, () => {
  console.log("Server is running On PORT 4000")
});

mongoose
  .connect("mongodb+srv://andrenations:OIkw3NnZuqmxu6fM@cluster0.sbmhcpj.mongodb.net/Data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Connected to mongo db!")
  })

  .catch((err) => {
    console.log(err.message);
  });


app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GEt", "POST"],
    credentials: true,

  })

);

app.use(express.json());


// module.exports = mongoose.connection;


// OIkw3NnZuqmxu6fM
