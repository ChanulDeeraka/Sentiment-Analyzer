const port = 4000;
import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


