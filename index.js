import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: ["https://hack-fe.vercel.app", "http://localhost:5173"], // Allow Vercel domain and local dev
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Enable credentials (cookies, authorization headers, etc)
  })
);

app.use(express.json());
connectDB();
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
