const port = 4000;
import express from "express";
import path from "path";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

//Import Routes
import userManagement from "./routes/userinfo.routes.js"

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

connectDB();


//Route Middlewares
app.use("/api/v1/user", userManagement);


const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
