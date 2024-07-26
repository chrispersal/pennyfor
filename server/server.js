import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json()); // this line lets us use the "body" from the request
dotenv.config();

app.get("/", function (req, res) {
  res.json("Woah! You found the secret API!");
});

app.post("/entries", function (req, res) {
  // retrieve the information from the form
  console.log(req.body);
  // here we would add our new joke to the database
  res.json("Recieved it.");
});

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
