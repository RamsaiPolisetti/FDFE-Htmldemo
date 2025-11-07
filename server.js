import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import feedbackRoutes from "./routes/feedbackRoutes.js";

// Load .env relative to this file so running node from project root still picks it up
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, ".env") });
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/feedback", feedbackRoutes);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB Connected");
    app.listen(process.env.PORT, () =>
      console.log(` Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(" DB Error:", err));