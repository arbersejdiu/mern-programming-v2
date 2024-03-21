const express = require("express");
const app = express.Router();
require("./server");

app.get("/api", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome to our api Page",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: [],
      message: "Initial Error",
      error,
    });
  }
});

// Failed App

module.exports = app;
