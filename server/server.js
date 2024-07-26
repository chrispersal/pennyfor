import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json()); // so we can use the request body
dotenv.config();

app.get("/", function (req, res) {
  res.json("Radical simply means grasping things at the root.");
});

app.post("/entries", async (req, res) => {
  // retrieve data from form
  const { username, message } = req.body;
  if (!username || !message) {
    return res
      .status(400)
      .json({ error: "Please enter your name and message." });
  }
  try {
    const id = [entries]();
    await db.run(
      "INSERT INTO entries (id, username, message) VALUES (?, ?, ?)",
      [id, username, message]
    );
    console.log("Message created - ", id);
    res.status(201).json({ id, username, message });
  } catch (error) {
    console.error("Error sending messages:", error);
    res.status(500).json({ error: "Failed to submit message." });
  }
  // add new entry to database
  res.json("Received it.");
});

app.get("/entries", async (req, res) => {
  try {
    const entries = await db.all("SELECT * FROM entries");
    res.json(entries);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ error: "Failed to retrieve messages." });
  }
});
app.listen(8080, function () {
  console.log("Server is running on port 8080.");
});
