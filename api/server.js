const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("mongodb");
const serverConn = require("http").createServer();
const server = express();
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;

server.use(cors());
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

mongoose.promise = global.Promise;
mongoose.set({ strictQuery: false });
// mongoose.createConnection(uri);
mongoose
  .connect("mongodb://localhost:27017/mern-programing-v2")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));
serverConn.listen(port, () => console.log(`Listening on ${port}`));

module.exports = { server, mongoose };
