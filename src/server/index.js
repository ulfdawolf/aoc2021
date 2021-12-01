import express from "express"; //Import the express dependency
import path from "path";
import {
  solution1Example,
  solution1,
  solution2Example,
  solution2,
} from "./solution/day1.js";

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
    solution1Example: solution1Example(),
    solution1: solution1(),
    solution2Example: solution2Example(),
    solution2: solution2(),
  };
  res.send(result);
});

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${port}`);
});
