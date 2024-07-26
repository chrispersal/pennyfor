// Setting up packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
