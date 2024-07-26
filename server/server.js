import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json()); // so we can use the request body
dotenv.config();

app.get("/", function (req, res) {
  res.json("Radical simply means grasping things at the root.");
});

app.post("/entries", function (req, res) {
  // retrieve data from form
  console.log(req.body);
  // add new entry to database
  res.json("Recieved it.");
});

app.listen(8080, function () {
  console.log("Server is running on port 8080.");
});
