const express = require("express");
const app = express();
const { findMean, findMedian, findMode } = require("./utils.js");
app.get("/mean", (req, res) => {
  console.log(req.query);
  if (req.query.nums) {
    let list = req.query.nums.split(",");

    list.forEach((item) => {
      let num = Number(item);
      if (isNaN(num)) {
        res.status(400).send(item + " is not a number");
      }
    });
    let convertToNumbers = list.map((i) => Number(i)).sort((a, b) => a - b);
    let value = findMean(convertToNumbers);
    let response = {
      operation: "mean",
      value: value,
    };
    res.json(response);
  } else {
    res.status(400).send("nums are required");
  }
});

app.get("/median", (req, res) => {
  console.log(req.query);
  if (req.query.nums) {
    let list = req.query.nums.split(",");
    list.forEach((item) => {
      let num = Number(item);
      if (isNaN(num)) {
        res.status(400).send(item + " is not a number");
      }
    });
    let convertToNumbers = list.map((i) => Number(i));
    let result = findMedian(convertToNumbers);
    let response = {
      operation: "median",
      value: result,
    };
    res.json(response);
  } else {
    res.status(400).send("nums are required");
  }
});

app.get("/mode", (req, res) => {
  console.log(req.query);
  if (req.query.nums) {
    let list = req.query.nums.split(",");
    list.forEach((item) => {
      let num = Number(item);
      if (isNaN(num)) {
        res.status(400).send(item + " is not a number");
      }
    });
    let value = findMode(list);
    let response = {
      operation: "mode",
      value: value,
    };
    res.json(response);
  } else {
    res.status(400).send("nums are required");
  }
});

app.listen(3000, () => console.log("working"));
