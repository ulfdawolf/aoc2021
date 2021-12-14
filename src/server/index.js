import express from "express"; //Import the express dependency
import path from "path";
import {
  day1Example1,
  day1Solution1,
  day1Example2,
  day1Solution2,
} from "./solution/day1.js";

import {
  day2Example1,
  day2Solution1,
  day2Example2,
  day2Solution2,
} from "./solution/day2.js";

import { day3Results } from "./solution/day3.js";

import { day4Results } from "./solution/day4.js";

import { day5Results } from "./solution/day5.js";

const app = express(); //Instantiate an express app, the main work horse of this server
const port = 8001; //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.get("/", (req, res) => {
  //get requests to the root ("/") will route here
  res.sendFile(path.resolve("src/client/index.html")); //server responds by sending the index.html file to the client's browser
  //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
});

app.get("/day1", (req, res) => {
  const result = {
    day1Example1: day1Example1(),
    day1Solution1: day1Solution1(),
    day1Example2: day1Example2(),
    day1Solution2: day1Solution2(),
  };
  res.send(result);
});

app.get("/day2", (req, res) => {
  const result = {
    day2Example1: day2Example1(),
    day2Solution1: day2Solution1(),
    day2Example2: day2Example2(),
    day2Solution2: day2Solution2(),
  };
  res.send(result);
});

app.get("/day3", (req, res) => {
  res.send(day3Results);
});

app.get("/day4", (req, res) => {
  res.send(day4Results);
});

app.get("/day5", (req, res) => {
  res.send(day5Results);
});

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${port}`);
});
